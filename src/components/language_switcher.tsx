"use client";

import { useLanguage, Locale } from "@/contexts/language_context";
import { useState, useRef, useEffect } from "react";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'zh-CN', label: '简体中文' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
  ] as const;

  const currentLabel = languages.find(l => l.code === locale)?.label || 'English';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs font-mono tracking-wider text-cyan-200/80 uppercase"
      >
        <span>{currentLabel}</span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-black/90 border border-white/20 backdrop-blur-md rounded-sm py-1 shadow-xl z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code as Locale);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-xs transition-colors ${locale === lang.code
                ? 'bg-cyan-900/30 text-cyan-300'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
