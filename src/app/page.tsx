"use client";

import Link from 'next/link';
import { EarthScene } from "@/components/earth_scene";
import { useEffect, useState } from 'react';
import { JoinNetworkButton } from "@/components/join_network_button";
import { useLanguage } from "@/contexts/language_context";
import { Header } from "@/components/header";

export default function Home() {
  const { t } = useLanguage();
  const [stats, setStats] = useState({
    activeNodes: 0,
    storage: 0,
    compute: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/v1/nodes');
        const data = await res.json();
        if (data.stats) {
          setStats({
            activeNodes: data.total_nodes,
            storage: data.stats.storage,
            compute: data.stats.flops
          });
        }
      } catch (e) {
        console.error("Failed to fetch home stats", e);
      }
    };

    fetchData();
    // Optional polling?
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full min-h-screen relative bg-black overflow-x-hidden text-white selection:bg-cyan-500/30">
      {/* Header */}
      <Header />

      {/* Fixed Background Scene */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <EarthScene />
      </div>

      {/* Scrollable Content Overlay */}
      <div className="relative z-10 flex flex-col justify-between p-8 pb-[50px] min-h-screen pt-32">

        {/* Hero Content */}
        <div className="max-w-4xl space-y-6 self-start md:self-center md:text-center mt-20 pointer-events-auto">
          <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 drop-shadow-[0_0_10px_rgba(0,100,255,0.5)]">
            {t('home.heroTitle')}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t('home.heroSubtitle')}
            <br />
          </p>

          <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center">
            <JoinNetworkButton />
            <Link href="/explorer" className="px-8 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-sm uppercase tracking-widest text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] flex justify-center items-center text-center">
              {t('home.viewExplorer')}
            </Link>
          </div>
        </div>

        {/* Footer Stats / Ticker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-6 backdrop-blur-[2px]">
          <div className="text-center">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{t('home.activeNodes')}</div>
            <div className="text-xl md:text-2xl font-mono text-cyan-400">{stats.activeNodes.toLocaleString()}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{t('home.totalStorage')}</div>
            <div className="text-xl md:text-2xl font-mono text-purple-400">{(stats.storage / 1000).toFixed(1)} PB</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{t('home.computePower')}</div>
            <div className="text-xl md:text-2xl font-mono text-blue-400">{(stats.compute / 1000).toFixed(1)} PFLOPS</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{t('home.networkStatus')}</div>
            <div className="text-xl md:text-2xl font-mono text-green-400">
              <span className="relative h-2 w-2">
                <span className="absolute mt-2 animate-ping h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
                <span className="absolute mt-3 ml-1 h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="ml-6">{t('home.online')}</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
