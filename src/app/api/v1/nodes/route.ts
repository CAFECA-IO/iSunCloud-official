import { NextRequest, NextResponse } from 'next/server';
import { generateNodeData, INodeSimulationData } from '@/lib/node_simulator';
import { COUNTRIES } from '@/constants/countries';
import fs from 'fs';
import path from 'path';

// Extended interface for internal storage with country info
interface IDynamicNode extends INodeSimulationData {
  country: string;
}

// Data persistence
const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'nodes.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// In-memory store for all nodes
let nodes: IDynamicNode[] = [];

// Load nodes on startup
try {
  if (fs.existsSync(DATA_FILE)) {
    const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
    nodes = JSON.parse(fileContent);
    console.log(`Loaded ${nodes.length} nodes from storage.`);
  }
} catch (error) {
  console.error("Failed to load nodes:", error);
}

// Save nodes helper
let isSaving = false;
function saveNodes() {
  if (isSaving) return;
  isSaving = true;
  // Use async write to avoid blocking main thread too much, but fire-and-forget in this context
  fs.writeFile(DATA_FILE, JSON.stringify(nodes, null, 2), (err) => {
    isSaving = false;
    if (err) console.error("Failed to save nodes:", err);
  });
}

// Helper to determine country from IP
function detectCountryFromIP(ip: string | null) {
  if (!ip) return COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];

  // Simple hash-like mapping
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    hash = ((hash << 5) - hash) + ip.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  const index = Math.abs(hash) % COUNTRIES.length;
  return COUNTRIES[index];
}

// Cleanup expired nodes (older than 1 hour)
const NODE_EXPIRATION_MS = 60 * 60 * 1000;

function cleanupExpiredNodes() {
  const now = Date.now();
  const initialCount = nodes.length;
  nodes = nodes.filter(node => {
    const nodeTime = new Date(node.timestamp).getTime();
    return (now - nodeTime) < NODE_EXPIRATION_MS;
  });

  if (nodes.length !== initialCount) {
    console.log(`Cleaned up ${initialCount - nodes.length} expired nodes.`);
    saveNodes();
  }
}

// Simulation Logic
function simulateNodes() {
  let changed = false;

  // Run cleanup
  cleanupExpiredNodes();

  // Random failure simulation (reduced chance)
  nodes.forEach(node => {
    if (Math.random() < 0.00005) {
      nodes.splice(nodes.indexOf(node), 1);
      changed = true;
    }
  });

  // Random new node simulation
  COUNTRIES.forEach(country => {
    const isTaiwan = country.name === 'Taiwan';
    const addChance = isTaiwan ? 0.20 : 0.001;

    if (Math.random() < addChance) {
      const node = generateNodeData();
      nodes.push({
        ...node,
        country: country.name,
        position: { latitude: country.lat, longitude: country.lng }
      });
      changed = true;
    }
  });

  if (changed) {
    saveNodes();
  }
}

setInterval(simulateNodes, 1000);

export async function GET() {
  // Trigger lazy cleanup on read as well
  cleanupExpiredNodes();

  // Stats calculation
  const countries = COUNTRIES.map(country => ({
    name: country.name,
    lat: country.lat,
    lng: country.lng,
    count: nodes.filter(n => n.country === country.name).length
  }));

  const totalFlops = nodes.reduce((acc, n) => acc + (n.resources?.flops || 0), 0);
  const totalStorage = nodes.reduce((acc, n) => acc + (n.resources?.storage || 0), 0);
  const totalRam = nodes.reduce((acc, n) => acc + (n.resources?.ram || 0), 0);

  // Map internal structure to expected output format (lat/lng)
  const formattedNodes = nodes.map(n => ({
    ...n,
    position: { lat: n.position.latitude, lng: n.position.longitude }
  }));

  return NextResponse.json({
    total_nodes: nodes.length,
    stats: {
      flops: totalFlops,
      storage: totalStorage,
      ram: totalRam
    },
    countries,
    nodes: formattedNodes
  });
}

export async function POST(req: NextRequest) {
  try {
    // only accept networkId 8017
    const body = await req.json();
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    if (body.nodeInfo?.networkId !== 8017) {
      return NextResponse.json({ success: false, error: "Invalid networkId" }, { status: 400 });
    }
    // Validate enode presence (it's the key)
    const enode = body.nodeInfo?.enode;
    if (!enode) {
      return NextResponse.json({ success: false, error: "Missing enode" }, { status: 400 });
    }

    const country = detectCountryFromIP(Array.isArray(ip) ? ip[0] : ip);
    const now = new Date().toISOString();

    // Check if node exists
    const existingNodeIndex = nodes.findIndex(n => n.nodeInfo.enode === enode);

    let resultNode: IDynamicNode;

    if (existingNodeIndex >= 0) {
      // Update existing node
      const existingNode = nodes[existingNodeIndex];
      const updatedNode: IDynamicNode = {
        ...existingNode,
        timestamp: now, // Refresh timestamp
        country: country.name, // Update location if IP changed
        position: { latitude: country.lat, longitude: country.lng },
        resources: {
          flops: body.resources?.flops || existingNode.resources.flops,
          storage: body.resources?.storage || existingNode.resources.storage,
          ram: body.resources?.ram || existingNode.resources.ram
        },
        // Update client info if provided
        nodeInfo: {
          ...existingNode.nodeInfo,
          client: body.nodeInfo?.client || existingNode.nodeInfo.client,
          networkId: body.nodeInfo?.networkId || existingNode.nodeInfo.networkId
        }
      };

      nodes[existingNodeIndex] = updatedNode;
      resultNode = updatedNode;
      // console.log(`Updated node: ${enode}`);
    } else {
      // Create new node
      const newNode: IDynamicNode = {
        id: body.id || `node-${Date.now()}`,
        timestamp: now,
        country: country.name,
        position: { latitude: country.lat, longitude: country.lng },
        resources: {
          flops: body.resources?.flops || 0,
          storage: body.resources?.storage || 0,
          ram: body.resources?.ram || 0
        },
        nodeInfo: {
          enode: enode,
          networkId: body.nodeInfo?.networkId || 8017,
          client: body.nodeInfo?.client || 'iSunCoin/v1.12.3'
        }
      };

      nodes.push(newNode);
      resultNode = newNode;
      // console.log(`Registered new node: ${enode}`);
    }

    saveNodes();

    return NextResponse.json({
      success: true,
      message: existingNodeIndex >= 0 ? "Node updated successfully" : "Node registered successfully",
      detected_country: country.name,
      node: resultNode
    });

  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
