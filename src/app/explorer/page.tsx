"use client";

import { ExplorerScene } from '@/components/explorer/explorer_scene';
import { ExplorerSidebar } from '@/components/explorer/explorer_sidebar';
import Link from 'next/link';
import { useState } from 'react';
import { ICountryData } from '@/components/explorer/country_markers';

export default function ExplorerPage() {
  const [selectedCountry, setSelectedCountry] = useState<ICountryData | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCountrySelect = (country: ICountryData) => {
    setSelectedCountry(country);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex">
      {/* Absolute Header/Back Button */}
      <div className="absolute top-10 left-6 z-50">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400/80 hover:text-cyan-300 transition-colors uppercase tracking-widest text-xs font-semibold group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Back to Home
        </Link>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      {!isSidebarOpen && (
        <button
          className="absolute top-6 right-6 z-[1001] p-2 text-cyan-400 border border-cyan-500/30 bg-black/50 backdrop-blur-sm rounded md:hidden hover:bg-cyan-500/10 transition-colors"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Toggle Sidebar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      )}

      {/* Main 3D View */}
      <div className="flex-1 relative">
        <ExplorerScene selectedCountry={selectedCountry} />
      </div>

      {/* Sidebar */}
      <ExplorerSidebar
        onCountrySelect={handleCountrySelect}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}
