"use client";


import { useLanguage } from "@/contexts/language_context";
import { Header } from "@/components/header";

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      {/* Header */}
      <Header />
      <div className="relative w-full min-h-screen bg-black overflow-x-hidden text-white selection:bg-cyan-500/30 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-black">

        {/* Background Gradient Effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen pt-32">

          {/* Content Section */}
          <main className="flex-1 w-full max-w-4xl mx-auto px-6 md:px-12 pb-[50px] flex flex-col justify-center">

            <div className="space-y-16">

              {/* Hero Statement */}
              <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">{t('about.heroTitlePart1')}</span>
                  <span className="block text-white">{t('about.heroTitlePart2')}</span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  {t('about.missionStatement')}
                </p>
              </div>

              {/* Pillars Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">

                {/* Pillar 1: Shared Compute */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="mb-4 text-cyan-400">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">{t('about.pillars.sharedCompute.title')}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {t('about.pillars.sharedCompute.desc')}
                  </p>
                </div>

                {/* Pillar 2: Knowledge Distillation */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="mb-4 text-purple-400">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">{t('about.pillars.knowledgeDistillation.title')}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {t('about.pillars.knowledgeDistillation.desc')}
                  </p>
                </div>

                {/* Pillar 3: Open Source */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="mb-4 text-green-400">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.85.577-4.147" /></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors">{t('about.pillars.openSource.title')}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {t('about.pillars.openSource.desc')}
                    <span className="text-white font-semibold block mt-1">{t('about.mitLicense')}</span>
                  </p>
                </div>

              </div>

              {/* Footer Quote */}
              <div className="text-center pt-10 border-t border-white/5">
                <p className="text-cyan-500/50 font-mono text-sm uppercase tracking-widest">
                  {t('about.footerQuote')}
                </p>
              </div>

            </div>

          </main>
        </div>
      </div>
    </>
  );
}
