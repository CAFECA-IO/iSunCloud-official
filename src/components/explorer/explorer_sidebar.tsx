"use client";

import { useEffect, useState } from 'react';
import { ICountryData } from '@/components/explorer/country_markers';

interface ICountryStats extends ICountryData {
  flops: number;
  storage: number; // TB
  ram: number; // GB
}

interface INodeResource {
  flops: number;
  storage: number;
  ram: number;
}

interface INode {
  country: string;
  resources: INodeResource;
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
      // RAM from API is in GB, keep it in GB for display or convert to TB if needed.
      // The previous code had RAM in TB label but generated small numbers (0.5).
      // Let's check the display logic.
      // Node sim generates: ram: (1-8)*4 = 4-32 GB.
      // Previous display: "0.2 TB".
      // Let's store raw GB in the stats and format in UI.
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

interface IExplorerSidebarProps {
  onCountrySelect?: (country: ICountryData) => void;
  isOpen?: boolean;
  onClose?: () => void;
  onToggle?: () => void;
}

export const ExplorerSidebar = ({ onCountrySelect, isOpen = false, onClose, onToggle }: IExplorerSidebarProps) => {
  const [stats, setStats] = useState<ICountryStats[]>([]);
  const [globalStats, setGlobalStats] = useState({ nodes: 0, flops: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/v1/nodes');
        const data: IApiResponse = await res.json();

        if (data.countries && data.nodes) {
          const countryStats = aggregateCountryStats(data.countries, data.nodes);
          setStats(countryStats);

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
    <>
      {/* Mobile Backdrop - Removed as requested to keep header visible */}
      {/* Desktop Backdrop - if needed? Assuming desktop sidebar is non-modal or managed by page. 
          The original code had `md:hidden` backdrop. So desktop had no backdrop. 
          We removed mobile backdrop. So no backdrop at all? 
          User didn't explicitly say "remove modal behavior", but "visible Global Network" implies it's a persistent bottom sheet.
      */}

      {/* Sidebar Panel */}
      <div className={`
        fixed bottom-0 left-0 w-full h-auto max-h-[40vh] bg-black/90 backdrop-blur-md border-t border-zinc-800 
        flex flex-col md:flex-col z-[1000] font-sans shadow-2xl transition-transform duration-300 ease-in-out
        translate-y-0
        md:inset-y-0 md:right-0 md:h-full md:max-h-full md:w-full md:max-w-[350px] md:border-l md:border-t-0 
        md:translate-y-0
      `}>
        {/* Header - Clickable on Mobile */}
        <div
          onClick={() => {
            if (window.innerWidth < 768) {
              onToggle?.();
            }
          }}
          onKeyDown={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && window.innerWidth < 768) {
              onToggle?.();
            }
          }}
          role="button"
          tabIndex={0}
          className="p-3 md:p-5 border-t md:border-t-0 md:border-b border-zinc-800 bg-black/50 backdrop-blur-xl relative flex-shrink-0 cursor-pointer md:cursor-default outline-none focus:bg-black/70"
        >

          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-widest mb-1 pointer-events-none">
            Global Network
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-4 pointer-events-none">
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

        {/* Collapsible Content Wrapper */}
        <div className={`
            grid transition-[grid-template-rows] duration-300 ease-in-out
            ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
            md:grid-rows-[1fr] md:flex-1 md:flex md:flex-col
        `}>
          <div className={`overflow-hidden flex flex-col ${!isOpen ? 'invisible md:visible' : ''}`}> {/* Invisible when closed to prevent focus/interaction */}
            <div className="flex-1 overflow-x-auto flex flex-row space-x-4 p-4 md:flex-col md:overflow-y-auto md:overflow-x-hidden md:space-x-0 md:space-y-2 md:p-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
              {stats.map((country) => (
                <div
                  key={country.name}
                  onClick={() => {
                    onCountrySelect?.(country);
                    // Optional: Close sidebar on selection on mobile
                    if (window.innerWidth < 768) {
                      onClose?.(); // Or onToggle
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onCountrySelect?.(country);
                      if (window.innerWidth < 768) onClose?.();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className="group relative p-4 bg-zinc-900/40 rounded-sm border border-white/5 hover:border-cyan-500/30 transition-all hover:bg-zinc-900/60 cursor-pointer focus:outline-none focus:border-cyan-500/50 min-w-[280px] md:min-w-0 flex-shrink-0 md:flex-shrink"
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
                      <div className="font-mono text-sm text-purple-200">{country.storage} <span className="text-[9px] opacity-50">TB</span></div>
                    </div>
                    <div className="group/metric border-l border-white/5">
                      <div className="text-[9px] text-zinc-500 uppercase tracking-wider mb-0.5 group-hover/metric:text-blue-400 transition-colors">RAM</div>
                      <div className="font-mono text-sm text-blue-200">{country.ram} <span className="text-[9px] opacity-50">GB</span></div>
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
        </div>
      </div>
    </>
  );
};
