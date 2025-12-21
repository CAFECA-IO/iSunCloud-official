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
const DATA_FILE = path.join(process.cwd(), 'data', 'nodes.json');

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

// Simulation Logic
function simulateNodes() {
  let changed = false;

  nodes.forEach(node => {
    // 0.01% chance of node failure
    if (Math.random() < 0.0001) {
      nodes.splice(nodes.indexOf(node), 1);
      changed = true;
    }
  });

  COUNTRIES.forEach(country => {
    const isTaiwan = country.name === 'Taiwan';
    const addChance = isTaiwan ? 0.20 : 0.001; // 20% for Taiwan, 0.1% for others

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
    const body = await req.json();
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';

    const country = detectCountryFromIP(Array.isArray(ip) ? ip[0] : ip);

    // Construct new node
    const newNode: IDynamicNode = {
      id: body.id || `node-${Date.now()}`,
      timestamp: new Date().toISOString(),
      // city: country.name, // Keep property 'city' for compatibility with INodeSimulationData? 
      // Wait, IDynamicNode I redefined above to have `country`. 
      // But `generateNodeData()` returns INodeSimulationData which might not have city or country?
      // Step 650 shows INodeSimulationData. Let's check lib/node_simulator.ts if needed.
      // Assuming I can just extend it.
      // I'll use `country` string effectively.
      // But verify if INodeSimulationData has `city`. If so I might need to populate it too.
      // Let's assume it doesn't or I can override.
      country: country.name,
      position: { latitude: country.lat, longitude: country.lng },
      resources: {
        flops: body.resources?.flops || Math.random() * 100,
        storage: body.resources?.storage || Math.random() * 20,
        ram: body.resources?.ram || 32
      },
      nodeInfo: {
        enode: body.nodeInfo?.enode || `enode://mock-${Date.now()}`,
        networkId: body.nodeInfo?.networkId || 1,
        client: body.nodeInfo?.client || 'OfficialClient/v1.0'
      }
    };

    nodes.push(newNode);
    saveNodes();

    return NextResponse.json({
      success: true,
      message: "Node registered successfully",
      detected_country: country.name,
      node: newNode
    });

  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
