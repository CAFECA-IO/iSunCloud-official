export interface INodeData {
  id: number;
  lat: number;
  lng: number;
  connections: number;
  flops: number; // in TFLOPS
  storage: number; // in TB
}

export const generateMockData = (count: number = 100): INodeData[] => {
  const data: INodeData[] = [];
  for (let i = 0; i < count; i++) {
    // Distribute points somewhat realistically (roughly landmass-ish, but random for now)
    // Lat: -60 to 70, Lng: -180 to 180
    const lat = (Math.random() * 130 - 60);
    const lng = (Math.random() * 360 - 180);

    data.push({
      id: i,
      lat,
      lng,
      connections: Math.floor(Math.random() * 50) + 1,
      flops: Math.floor(Math.random() * 1000) + 10,
      storage: Math.floor(Math.random() * 500) + 10,
    });
  }
  return data;
};
