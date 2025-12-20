"use client";

import { EarthScene } from "@/components/EarthScene";

export default function Home() {
  return (
    <main className="w-full h-screen relative bg-black overflow-hidden relative">
      <EarthScene />

      {/* UI Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-8 md:p-16 z-10 text-white">

        {/* Header */}
        <header className="flex justify-between items-center animate-fade-in-down">
          <div className="flex items-center gap-2">
            {/* Logo placeholder */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(0,255,255,0.5)]"></div>
            <h1 className="text-2xl font-bold tracking-wider font-mono">iSunCloud</h1>
          </div>
          <nav className="hidden md:flex gap-6 pointer-events-auto">
            <a href="#" className="text-sm text-cyan-200/70 hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]">Nodes</a>
            <a href="#" className="text-sm text-cyan-200/70 hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]">Marketplace</a>
            <a href="#" className="text-sm text-cyan-200/70 hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]">About</a>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="max-w-4xl space-y-6 self-start md:self-center md:text-center mt-20 pointer-events-auto">
          <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 drop-shadow-[0_0_10px_rgba(0,100,255,0.5)]">
            Global Shared <br /> Computing Network
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Monetize your idle resources. Connect to the world's first decentralized supercomputer.
            <br />
            <span className="text-cyan-400 font-mono text-sm mt-2 block">
              &gt; ACCESSING FLOPS: [██████████] 100%
            </span>
          </p>

          <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-cyan-600/20 border border-cyan-500/50 hover:bg-cyan-500/30 text-cyan-300 rounded-sm uppercase tracking-widest text-sm font-semibold transition-all backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]">
              Join Network
            </button>
            <button className="px-8 py-3 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 rounded-sm uppercase tracking-widest text-sm font-semibold transition-all hover:bg-white/5">
              View Explorer
            </button>
          </div>
        </div>

        {/* Footer Stats / Ticker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-6 backdrop-blur-[2px]">
          <div className="text-left">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Active Nodes</div>
            <div className="text-xl md:text-2xl font-mono text-cyan-400">12,842</div>
          </div>
          <div className="text-left">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Total Storage</div>
            <div className="text-xl md:text-2xl font-mono text-purple-400">84.5 PB</div>
          </div>
          <div className="text-left">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Compute Power</div>
            <div className="text-xl md:text-2xl font-mono text-blue-400">425 PFLOPS</div>
          </div>
          <div className="text-left hidden md:block">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Network Status</div>
            <div className="flex items-center gap-2 text-xl md:text-2xl font-mono text-green-400">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              ONLINE
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
