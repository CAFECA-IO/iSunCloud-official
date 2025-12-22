"use client";

import { Header } from "@/components/header";
import { ProductHero } from "@/components/marketplace/buy_product";
import { AiReportSection } from "@/components/marketplace/ask_ai";

export default function MarketplacePage() {
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

          <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 flex flex-col gap-24">

            {/* Product Section */}
            <ProductHero />

            {/* AI Report Search Section */}
            <AiReportSection />

          </main>
        </div>
      </div>
    </>
  );
}
