"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from "@/contexts/language_context";
import { MarkdownContent } from "@/components/common/markdown_content";

export const AiReportSection = () => {
  const { t, locale } = useLanguage();

  // State for Search
  const [query, setQuery] = useState('');
  const [report, setReport] = useState<string | null>(null);
  const [reportTitle, setReportTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState<'like' | 'dislike' | null>(null);
  const [history, setHistory] = useState<{ id: string, title: string }[]>([]);

  // Fetch recent reports on mount
  useEffect(() => {
    const fetchRecentReports = async () => {
      try {
        const res = await fetch('/api/v1/recent_reports');
        if (res.ok) {
          const data = await res.json();
          setHistory(data);
        }
      } catch (error) {
        console.error('Failed to fetch recent reports:', error);
      }
    };

    fetchRecentReports();
  }, []);

  const scrollToReport = () => {
    const reportSection = document.getElementById('report-section');
    if (reportSection) reportSection.scrollIntoView({ behavior: 'smooth' });
  };

  const generateReport = async (question: string) => {
    if (!question.trim() || isLoading) return;

    setRating(null);
    setReport(null);
    setIsLoading(true);
    setReportTitle(question);
    scrollToReport();

    try {
      const res = await fetch('/api/v1/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question, language: locale }),
      });

      const data = await res.json();

      if (res.ok) {
        const content = data.reply.replace(/^# .+\n/, '');
        setReport(content);
        if (data.id) {
          setHistory(prev => {
            // Avoid adding duplicates to visual history instantly if possible,
            // otherwise rely on re-fetch or just prepend.
            return [{ id: data.id, title: question }, ...prev];
          });
        }
      } else {
        setReport(`**${t('marketplace.aiChat.errors.generating')}** ${data.error || t('marketplace.aiChat.errors.unknown')}`);
      }
    } catch (err) {
      console.error(err);
      setReport(`**${t('marketplace.aiChat.errors.connection')}**`);
    } finally {
      setIsLoading(false);
    }
  };

  const loadReport = async (item: { id: string, title: string }) => {
    if (isLoading) return;

    setRating(null);
    setReport(null);
    setIsLoading(true);
    setReportTitle(item.title);
    scrollToReport();

    try {
      const res = await fetch(`/api/v1/reports/${item.id}`);
      const data = await res.json();

      if (res.ok) {
        const content = data.content.replace(/^# .+\n/, '');
        setReport(content);
      } else {
        setReport(`**${t('marketplace.aiChat.errors.loading')}** ${data.error || t('marketplace.aiChat.errors.notFound')}`);
      }
    } catch (err) {
      console.error(err);
      setReport(`**${t('marketplace.aiChat.errors.connectionLoad')}**`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    generateReport(query);
  };

  return (
    <div id="report-section" className="w-full max-w-5xl mx-auto pt-12 space-y-12">

      <div className="flex flex-col items-center gap-8 text-center">
        <h2 className="text-3xl font-bold text-white">{t('marketplace.aiChat.title')}</h2>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative w-full max-w-3xl group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative flex items-center bg-black border border-white/20 rounded-full px-6 py-4 shadow-2xl">
            <svg className="w-6 h-6 text-gray-400 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              className="flex-1 bg-transparent text-lg text-white placeholder-gray-500 focus:outline-none"
              placeholder={t('marketplace.aiChat.placeholder')}
              aria-label={t('marketplace.aiChat.inputLabel')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isLoading}
            />
            {isLoading ? (
              <div className="animate-spin h-5 w-5 border-2 border-cyan-500 border-t-transparent rounded-full ml-4"></div>
            ) : (
              <button type="submit" className="ml-4 text-cyan-400 hover:text-cyan-300 font-medium">{t('marketplace.aiChat.askBtn')}</button>
            )}
          </div>
        </form>
      </div>

      {/* Recent History */}
      {history.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-400 text-center uppercase tracking-widest text-xs">{t('marketplace.aiChat.recentReports')}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {history.map((item) => (
              <button
                key={item.id}
                onClick={() => loadReport(item)}
                className="px-4 py-2 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-full text-sm text-purple-200 transition-all hover:scale-105 hover:border-purple-400 group flex items-center gap-2"
              >
                <svg className="w-3 h-3 text-purple-400 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Report Display Section */}
      {report && (
        <div className="bg-zinc-900/80 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl shadow-2xl animate-fade-in-up">
          <div className="flex justify-between items-start mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs text-cyan-400 mb-2 uppercase tracking-wide">{t('marketplace.aiChat.generatedLabel')}</div>
              <h2 className="text-2xl font-bold text-white">{reportTitle}</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setRating('like')}
                aria-label={t('marketplace.aiChat.like')}
                className={`p-2 rounded-lg transition-colors ${rating === 'like' ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-gray-400 hover:text-white'}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
              </button>
              <button
                onClick={() => setRating('dislike')}
                aria-label={t('marketplace.aiChat.dislike')}
                className={`p-2 rounded-lg transition-colors ${rating === 'dislike' ? 'bg-red-500/20 text-red-400' : 'bg-white/5 text-gray-400 hover:text-white'}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" /></svg>
              </button>
            </div>
          </div>

          <div className="prose prose-invert prose-cyan max-w-none">
            <MarkdownContent content={report} />
          </div>
        </div>
      )}
    </div>
  );
};
