'use client';

import { useState } from 'react';
import Banner from './components/Banner';
import AnalyticsSection from './components/AnalyticsSection';
import ErrorSection from './components/ErrorSection';
import HowToUse from './components/HowToUse';
import WhyUse from './components/WhyUse';
import Footer from './components/Footer';
import { extractChannelId, searchChannelByName, fetchChannelData } from './utils/youtubeApi';

export default function Home() {
  const [channelData, setChannelData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const handleSearch = async (query) => {
    if (!query) {
      setError('Please enter a YouTube channel name or URL');
      setShowAnalytics(false);
      return;
    }

    try {
      setIsLoading(true);
      setError('');

      let channelId = extractChannelId(query);
      
      // If no channel ID found in URL, search by name
      if (!channelId) {
        channelId = await searchChannelByName(query);
        if (!channelId) {
          setError('Channel not found. Try with channel ID or exact name.');
          setShowAnalytics(false);
          return;
        }
      }
      
      const data = await fetchChannelData(channelId);
      if (!data) {
        setError('No channel data received from API');
        setShowAnalytics(false);
        return;
      }
      
      setChannelData(data);
      setShowAnalytics(true);
      // Scroll to analytics section
      setTimeout(() => {
        document.getElementById('analytics-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err) {
      console.error('Search Error:', err);
      setError(`Error: ${err.message || 'Please try again'}`);
      setShowAnalytics(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setError('');
    setShowAnalytics(false);
  };

  return (
    <main className="min-h-screen bg-[#0f0f23] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-lg"></div>
            <h1 className="text-2xl font-bold font-orbitron">TCU Tools</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#how-to-use" className="hover:text-indigo-400 transition-colors">How to Use</a>
            <a href="#why-use" className="hover:text-indigo-400 transition-colors">Features</a>
            <a href="#analytics-section" className="hover:text-indigo-400 transition-colors">Analytics</a>
          </nav>
          <button className="md:hidden">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </header>

        {/* Banner Section */}
        <Banner onSearch={handleSearch} isLoading={isLoading} />

        {/* Analytics Section */}
        <div id="analytics-section">
          {showAnalytics && channelData ? (
            <AnalyticsSection channelData={channelData} />
          ) : null}
        </div>

        {/* Error Section */}
        {error && (
          <ErrorSection error={error} onRetry={handleRetry} />
        )}

        {/* How to Use Section */}
        <div id="how-to-use">
          <HowToUse />
        </div>

        {/* Why Use Section */}
        <div id="why-use">
          <WhyUse />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}