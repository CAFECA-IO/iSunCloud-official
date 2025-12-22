"use client";

import { ExplorerScene } from '@/components/explorer/explorer_scene';
import { ExplorerSidebar } from '@/components/explorer/explorer_sidebar';
import { useState } from 'react';
import { ICountryData } from '@/components/explorer/country_markers';
import { Header } from "@/components/header";

export default function ExplorerPage() {
  const [selectedCountry, setSelectedCountry] = useState<ICountryData | null>(null);

  const handleCountrySelect = (country: ICountryData) => {
    setSelectedCountry(country);
  };

  return (
    <>
      {/* Header */}
      <Header />
      <div className="relative w-full h-screen bg-black overflow-hidden flex">
        {/* Main 3D View */}
        <div className="flex-1 relative">
          <ExplorerScene selectedCountry={selectedCountry} />
        </div>

        {/* Sidebar */}
        <ExplorerSidebar
          onCountrySelect={handleCountrySelect}
        />
      </div>
    </>
  );
}
