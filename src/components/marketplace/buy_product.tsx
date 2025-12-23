"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language_context";

import { PRODUCTS } from "@/data/products";

export const ProductHero = () => {
  const { t } = useLanguage();
  const product = PRODUCTS[0]; // Currently displaying the first product

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Column: Product Image/Visual */}
      <div className="flex justify-center items-center relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative w-full aspect-square max-w-[500px] border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl shadow-cyan-900/20">
          <Image
            src={product.image}
            alt={`${product.brand} ${product.model}`}
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Column: Details */}
      <div className="space-y-8">
        <div>
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.3em] mb-2">{t(product.subtitleKey)}</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {product.brand} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">{product.model}</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-cyan-500/30 pl-6">
            {t(product.descriptionKey)}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4">
          {product.specs.map((spec, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-colors">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{t(spec.labelKey)}</div>
              <div className={`text-lg font-mono ${spec.colorClass}`}>{spec.value}</div>
            </div>
          ))}
        </div>

        {/* Pricing and Action */}
        <div className="pt-8 flex flex-col sm:flex-row items-center gap-8 border-t border-white/10">
          <div>
            <div className="text-sm text-gray-400 line-through mb-1">{product.price.currency} {product.price.original}</div>
            <div className="text-4xl font-bold font-mono text-white">{product.price.currency} {product.price.current}</div>
          </div>
          <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold uppercase tracking-widest rounded-sm transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            {t('marketplace.buyNow')}
          </button>
        </div>
      </div>
    </div>
  );
};
