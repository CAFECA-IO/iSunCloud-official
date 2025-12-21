

export interface INodePosition {
  latitude: number;
  longitude: number;
}

export interface IEthereumNodeInfo {
  enode: string;
  networkId: number;
  client: string;
}

export interface INodeSimulationData {
  id: string;
  timestamp: string;
  nodeInfo: IEthereumNodeInfo;
  resources: {
    flops: number; // TeraFLOPS
    storage: number; // Terabytes
    ram: number; // Gigabytes
  };
  position: INodePosition;
}

/**
 * Generates a mock Ethereum enode URL
 */
const generateEnode = (): string => {
  const nodeId = Array.from({ length: 128 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
  const ip = `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
  const port = 30303;
  return `enode://${nodeId}@${ip}:${port}`;
};

/**
 * Generates random node simulation data
 */
export const generateNodeData = (): INodeSimulationData => {
  // Random coordinates (weighted slightly towards populated areas to be realistic? Or just random)
  // For now simple random
  const lat = (Math.random() * 160) - 80; // Avoid extreme poles
  const lng = (Math.random() * 360) - 180;

  return {
    id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2),
    timestamp: new Date().toISOString(),
    nodeInfo: {
      enode: generateEnode(),
      networkId: 1, // Mainnet
      client: Math.random() > 0.5 ? 'Geth/v1.10.0/linux-amd64/go1.16' : 'Nethermind/v1.10.79/linux-x64/dotnet5.0',
    },
    resources: {
      flops: Number((Math.random() * 100).toFixed(2)), // 0-100 TFLOPS
      storage: Number((Math.random() * 20).toFixed(2)), // 0-20 TB
      ram: Math.floor(Math.random() * 128) + 16, // 16-144 GB
    },
    position: {
      latitude: lat,
      longitude: lng,
    },
  };
};
