"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Shared Interfaces
export interface ICountryData {
  name: string;
  lat: number;
  lng: number;
  count: number;
}

export interface INodeResource {
  flops: number;
  storage: number;
  ram: number;
}

export interface INode {
  country: string;
  resources: INodeResource;
}

export interface ICountryStats extends ICountryData {
  flops: number;
  storage: number;
  ram: number;
}

interface IGlobalStats {
  nodes: number;
  flops: number;
}

interface IApiResponse {
  total_nodes: number;
  stats: {
    flops: number;
    storage: number;
    ram: number;
  };
  countries: ICountryData[];
  nodes: INode[];
}

interface INodesContextType {
  stats: ICountryStats[];
  globalStats: IGlobalStats;
  countries: ICountryData[];
  loading: boolean;
}

const NodesContext = createContext<INodesContextType | undefined>(undefined);

const aggregateCountryStats = (countries: ICountryData[], nodes: INode[]): ICountryStats[] => {
  const countryMap = new Map<string, ICountryStats>();

  // Initialize map with country data
  countries.forEach(c => {
    countryMap.set(c.name, {
      ...c,
      flops: 0,
      storage: 0,
      ram: 0
    });
  });

  // Aggregate resources from nodes
  nodes.forEach(node => {
    const countryStat = countryMap.get(node.country);
    if (countryStat) {
      countryStat.flops += node.resources.flops || 0;
      countryStat.storage += node.resources.storage || 0;
      countryStat.ram += node.resources.ram || 0;
    }
  });

  return Array.from(countryMap.values())
    .map(stat => ({
      ...stat,
      flops: Number(stat.flops.toFixed(1)),
      storage: Number(stat.storage.toFixed(1)),
      ram: Number(stat.ram.toFixed(1))
    }))
    .sort((a, b) => b.count - a.count);
};

export function NodesProvider({ children }: { children: ReactNode }) {
  const [stats, setStats] = useState<ICountryStats[]>([]);
  const [globalStats, setGlobalStats] = useState<IGlobalStats>({ nodes: 0, flops: 0 });
  const [countries, setCountries] = useState<ICountryData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/v1/nodes');
        const data: IApiResponse = await res.json();

        if (data.countries && data.nodes) {
          const countryStats = aggregateCountryStats(data.countries, data.nodes);
          setStats(countryStats);
          setCountries(data.countries);
          setGlobalStats({
            nodes: data.total_nodes,
            flops: data.stats.flops
          });
        }
      } catch (e) {
        console.error("Failed to fetch node data", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <NodesContext.Provider value={{ stats, globalStats, countries, loading }}>
      {children}
    </NodesContext.Provider>
  );
}

export function useNodes() {
  const context = useContext(NodesContext);
  if (context === undefined) {
    throw new Error('useNodes must be used within a NodesProvider');
  }
  return context;
}
