"use client";

import Link from 'next/link';
import Image from "next/image";
import { useLanguage } from "@/contexts/language_context";
import { LanguageSwitcher } from "@/components/language_switcher";

interface IHeaderProps {
  className?: string;
}

import { useState } from 'react';

export function Header({ className = "" }: IHeaderProps) {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full flex justify-between items-center p-6 md:p-8 animate-fade-in-down z-[1001] bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-[2px] ${className}`}>
        <Link href="/" className="flex items-center gap-2 relative z-[1001]" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/isuncloud.svg"
            alt="iSunCloud Logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-bold tracking-wider font-mono text-white">iSunCloud</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 pointer-events-auto items-center">
          <Link href="/explorer" className="text-sm text-cyan-200/70 hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]">{t('nav.explorer')}</Link>
          <Link href="/downloads" className="text-sm text-cyan-200/70 hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]">{t('nav.downloads')}</Link>
          <Link href="/marketplace" className="text-sm text-cyan-200/70 hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]">{t('nav.marketplace')}</Link>
          <Link href="/about" className="text-sm text-cyan-200/70 hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px]">{t('nav.about')}</Link>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden relative z-[1001] p-2 text-cyan-400 hover:text-cyan-300 transition-colors pointer-events-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-md z-[1000] flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col items-center gap-8 text-xl font-bold tracking-widest">
          <Link href="/explorer" onClick={() => setIsMenuOpen(false)} className="text-cyan-200 hover:text-cyan-400 transition-colors uppercase">{t('nav.explorer')}</Link>
          <Link href="/downloads" onClick={() => setIsMenuOpen(false)} className="text-cyan-200 hover:text-cyan-400 transition-colors uppercase">{t('nav.downloads')}</Link>
          <Link href="/marketplace" onClick={() => setIsMenuOpen(false)} className="text-cyan-200 hover:text-cyan-400 transition-colors uppercase">{t('nav.marketplace')}</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-cyan-200 hover:text-cyan-400 transition-colors uppercase">{t('nav.about')}</Link>
          <div className="pt-4 pointer-events-auto">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </>
  );
}
