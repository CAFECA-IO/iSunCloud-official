"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language_context";

export const ProductHero = () => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
    </div>
  );
};
