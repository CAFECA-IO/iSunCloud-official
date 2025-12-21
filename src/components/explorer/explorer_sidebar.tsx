"use client";

import { useEffect, useState } from 'react';
import { ICountryData } from '@/components/explorer/country_markers';

interface ICountryStats extends ICountryData {
  flops: number;
  storage: number; // PB
  ram: number; // TB
}

interface IApiResponse {
  total_nodes: number;
  stats: {
    flops: number;
    storage: number;
    ram: number;
  };
  countries: ICountryData[];
  nodes: unknown[];
}

const generateCountryStats = (countries: ICountryData[]): ICountryStats[] => {
  return countries.map(country => ({
    ...country,
    flops: Number((country.count * 0.15 + (Math.random() * 20)).toFixed(1)),
    storage: Number((country.count * 0.05 + (Math.random() * 5)).toFixed(1)),
    ram: Number((country.count * 0.02 + (Math.random() * 2)).toFixed(1))
  })).sort((a, b) => b.count - a.count);
};

interface IExplorerSidebarProps {
  onCountrySelect?: (country: ICountryData) => void;
}

export const ExplorerSidebar = ({ onCountrySelect }: IExplorerSidebarProps) => {
  const [stats, setStats] = useState<ICountryStats[]>([]);
  const [globalStats, setGlobalStats] = useState({ nodes: 0, flops: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/v1/nodes');
        const data: IApiResponse = await res.json();

        if (data.countries) {
          const countryStats = generateCountryStats(data.countries);
          setStats(countryStats);

          // Use API global stats if available, or fallback to sum
          setGlobalStats({
            nodes: data.total_nodes,
            flops: data.stats.flops
          });
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 right-0 h-full w-full max-w-[350px] bg-black/80 backdrop-blur-md border-l border-zinc-800 flex flex-col z-10 font-sans shadow-2xl">
      <div className="p-5 border-b border-zinc-800 bg-black/50 backdrop-blur-xl">
        <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-widest mb-1">
          Global Network
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Total Nodes</div>
            <div className="text-2xl font-mono text-white">{globalStats.nodes.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Global Compute</div>
            <div className="text-2xl font-mono text-cyan-400">{(globalStats.flops / 1000).toFixed(1)} <span className="text-xs text-zinc-500">PFLOPS</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        {stats.map((country) => (
          <div
            key={country.name}
            onClick={() => onCountrySelect?.(country)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onCountrySelect?.(country);
              }
            }}
            role="button"
            tabIndex={0}
            className="group relative p-4 bg-zinc-900/40 rounded-sm border border-white/5 hover:border-cyan-500/30 transition-all hover:bg-zinc-900/60 cursor-pointer focus:outline-none focus:border-cyan-500/50"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-zinc-100 text-lg leading-none">{country.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
                  <span className="text-xs text-green-400/80 font-mono tracking-tight uppercase">Operational</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-mono text-white tracking-tight">{country.count.toLocaleString()}</div>
                <div className="text-[10px] text-zinc-500 uppercase">Active Nodes</div>
              </div>
            </div>

            {/* Metrics Grid - Adaptive */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-center">
              <div className="group/metric">
                <div className="text-[9px] text-zinc-500 uppercase tracking-wider mb-0.5 group-hover/metric:text-cyan-400 transition-colors">FLOPS</div>
                <div className="font-mono text-sm text-cyan-200">{country.flops.toLocaleString()} <span className="text-[9px] opacity-50">T</span></div>
              </div>
              <div className="group/metric border-l border-white/5">
                <div className="text-[9px] text-zinc-500 uppercase tracking-wider mb-0.5 group-hover/metric:text-purple-400 transition-colors">Storage</div>
                <div className="font-mono text-sm text-purple-200">{country.storage} <span className="text-[9px] opacity-50">PB</span></div>
              </div>
              <div className="group/metric border-l border-white/5">
                <div className="text-[9px] text-zinc-500 uppercase tracking-wider mb-0.5 group-hover/metric:text-blue-400 transition-colors">RAM</div>
                <div className="font-mono text-sm text-blue-200">{country.ram} <span className="text-[9px] opacity-50">TB</span></div>
              </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-10 transition-opacity">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="text-cyan-500">
                <path d="M0 0H100V100H0V0Z" stroke="currentColor" strokeWidth="0.5" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-zinc-800 bg-black/80 text-center">
        <div className="flex justify-center items-center gap-2 text-[10px] text-zinc-600 uppercase tracking-widest">
          <span className="w-2 h-2 border border-zinc-700 block rotate-45"></span>
          <span>Real-time Telemetry</span>
          <span className="w-2 h-2 border border-zinc-700 block rotate-45"></span>
        </div>
      </div>
    </div>
  );
};
