"use client";

import { ExplorerScene } from '@/components/explorer/explorer_scene';
import { ExplorerSidebar } from '@/components/explorer/explorer_sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ICountryData } from '@/components/explorer/country_markers';

export default function ExplorerPage() {
  const [selectedCountry, setSelectedCountry] = useState<ICountryData | null>(null);

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

      {/* Main 3D View */}
      <div className="flex-1 relative">
        <ExplorerScene selectedCountry={selectedCountry} />
      </div>

      {/* Sidebar */}
      <ExplorerSidebar onCountrySelect={handleCountrySelect} />
    </div>
  );
}
