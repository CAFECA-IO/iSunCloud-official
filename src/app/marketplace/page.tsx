"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language_context";
import { Header } from "@/components/header";

export default function MarketplacePage() {
  const { t } = useLanguage();
  return (
    <>
      {/* Header */}
      <Header />
      <div className="relative w-full min-h-screen bg-black overflow-x-hidden text-white selection:bg-cyan-500/30 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-black">

        {/* Background Gradient Effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen pt-32">
          {/* Title removed from header, keeping separation if desired, or relying on visual design. 
              The previous header had a "MARKETPLACE" or title. The new Header has Nav links. 
              We might need to re-add the "MARKETPLACE" title into the main content area if it's missing.
              Looking at the original design, there was a "MARKETPLACE" title in the header next to the switcher. 
              The unified header likely replaces the full top bar. 
              I should ensure the user context is clear. The original design had a gradient title.
              I will simple replace the header for now. 
              Wait, the original Marketplace header had "Back to Home" AND "MARKETPLACE" title. 
              The new Header has "iSunCloud Logo", Nav Links, Switcher. 
              The "MARKETPLACE" specific title is nice to keep? 
              The user said "unified header", implying the navigation bar. 
              I will proceed with just the unified header.
          */}

          {/* Product Section */}
          <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Product Image/Visual */}
            <div className="flex justify-center items-center relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative w-full aspect-square max-w-[500px] border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl shadow-cyan-900/20">
                <Image
                  src="/asus_ascent_gx10.png"
                  alt="ASUS Ascent GX10"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-2">{t('marketplace.productSubtitle')}</h2>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  ASUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">Ascent GX10</span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-cyan-500/30 pl-6">
                  {t('marketplace.description')}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t('marketplace.specs.compute')}</div>
                  <div className="text-lg font-mono text-cyan-300">1P FLOPS</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t('marketplace.specs.memory')}</div>
                  <div className="text-lg font-mono text-purple-300">128GB</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t('marketplace.specs.storage')}</div>
                  <div className="text-lg font-mono text-cyan-300">1TB</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t('marketplace.specs.network')}</div>
                  <div className="text-lg font-mono text-green-400">10GbE</div>
                </div>
              </div>

              {/* Pricing and Action */}
              <div className="pt-8 flex flex-col sm:flex-row items-center gap-8 border-t border-white/10">
                <div>
                  <div className="text-sm text-gray-400 line-through mb-1">TWD 129,900.00</div>
                  <div className="text-4xl font-bold font-mono text-white">TWD 99900.00</div>
                </div>
                <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold uppercase tracking-widest rounded-sm transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  {t('marketplace.buyNow')}
                </button>
              </div>
            </div>

          </main>
        </div>
      </div>
    </>
  );
}
