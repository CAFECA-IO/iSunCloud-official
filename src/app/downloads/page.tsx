"use client";

import { useEffect, useState } from 'react';
import { DOWNLOADS, DownloadItem } from '@/constants/downloads';
import { useLanguage } from "@/contexts/language_context";
import { Header } from "@/components/header";

export default function DownloadPage() {
  const { t } = useLanguage();
  const [recommended, setRecommended] = useState<DownloadItem | null>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    let recommendedOs: 'Windows' | 'macOS' | 'Linux' | null = null;

    if (userAgent.indexOf("Win") !== -1) {
      recommendedOs = 'Windows';
    } else if (userAgent.indexOf("Mac") !== -1) {
      recommendedOs = 'macOS';
    } else if (userAgent.indexOf("Linux") !== -1 || userAgent.indexOf("X11") !== -1) {
      recommendedOs = 'Linux';
    }

    if (recommendedOs) {
      const item = DOWNLOADS.find(d => d.os === recommendedOs);
      if (item) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setRecommended(item);
      }
    }
  }, []);

  return (
    <>
      {/* Header */}
      <Header />
      <div className="h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-900 scrollbar-track-black min-h-screen pt-32 pb-[50px] px-6 flex flex-col items-center">
        <div className="max-w-4xl w-full space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              {t('downloads.title')}
            </h1>
            <p className="text-xl text-cyan-100/70 max-w-2xl mx-auto">
              {t('downloads.subtitle')}
            </p>
          </div>

          {/* Recommendation Section */}
          <div className="flex justify-center">
            {recommended ? (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <a
                  aria-label="Download for your operating system"
                  href={recommended.url}
                  className="relative flex items-center space-x-4 px-12 py-6 bg-slate-900 ring-1 ring-cyan-500/50 rounded-lg text-cyan-100 hover:text-white transition-all transform hover:scale-[1.02]"
                >
                  <div className="text-left">
                    <div className="text-sm text-cyan-400 uppercase tracking-wider font-semibold mb-1">
                      {t('downloads.recommended.title')}
                    </div>
                    <div className="text-2xl font-bold">
                      {t('downloads.recommended.downloadFor')} {recommended.os}
                    </div>
                    <div className="text-sm text-cyan-400/60 mt-1">
                      {t('downloads.recommended.version')} {recommended.version} • {recommended.arch}
                    </div>
                  </div>
                  <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            ) : (
              <div className="h-24 flex items-center justify-center text-cyan-400/50 italic">
                {t('downloads.selectVersion')}
              </div>
            )}
          </div>

          {/* All Versions List */}
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-white/10 bg-white/5">
              <h2 className="text-xl font-semibold text-white">{t('downloads.allVersions')}</h2>
            </div>
            <div className="divide-y divide-white/10">
              {DOWNLOADS.map((item) => (
                <div key={item.filename} className="p-6 flex flex-col md:flex-row items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                  <div className="flex items-center space-x-4 w-full md:w-auto">
                    <div className="w-12 h-12 bg-cyan-900/30 rounded-lg flex items-center justify-center border border-cyan-500/20 text-cyan-400 font-bold text-xl">
                      {item.os[0]}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{item.os}</h3>
                      <p className="text-sm text-cyan-100/50">{item.arch} • v{item.version}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <span className="hidden md:block text-xs text-cyan-100/30 font-mono">
                      {item.filename}
                    </span>
                    <a
                      href={item.url}
                      className="w-full md:w-auto px-6 py-2 bg-cyan-600/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-300 rounded text-sm font-semibold transition-all text-center"
                    >
                      {t('downloads.downloadBtn')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
