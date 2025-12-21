"use client";

import { ExplorerScene } from '@/components/explorer/explorer_scene';
import { ExplorerSidebar } from '@/components/explorer/explorer_sidebar';
import Image from 'next/image';
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
      <div className="absolute top-6 left-6 z-50 flex items-center gap-4">
        <Link href="/">
          <Image
            className="dark:invert opacity-80 hover:opacity-100 transition-opacity"
            src="/isuncloud.svg"
            alt="iSunCloud Logo"
            width={40}
            height={40}
          />
        </Link>
        <span className="text-xl font-bold tracking-widest text-white/50 border-l border-white/20 pl-4 uppercase">Network Explorer</span>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <button
        className="absolute top-6 right-6 z-50 p-2 text-cyan-400 border border-cyan-500/30 bg-black/50 backdrop-blur-sm rounded md:hidden hover:bg-cyan-500/10 transition-colors"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Toggle Sidebar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>

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
