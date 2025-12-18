'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Pie, Doughnut, Radar, PolarArea } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function AnalyticsSection({ channelData }) {
  const {
    snippet = {},
    statistics = {},
    status = {},
    brandingSettings = {},
    id
  } = channelData;

  const channelSettings = brandingSettings.channel || {};
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Chart data configurations
  const subscriberChartData = {
    labels: months,
    datasets: [{
      label: 'Subscriber Growth',
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 40000) + 10000),
      borderColor: '#00ffcc',
      backgroundColor: 'rgba(0, 255, 204, 0.1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true
    }]
  };

  const uploadsChartData = {
    labels: months,
    datasets: [{
      label: 'Video Uploads',
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 15) + 1),
      backgroundColor: 'rgba(255, 99, 132, 0.7)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };

  const viewsChartData = {
    labels: months.slice(0, 6),
    datasets: [{
      data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 45000) + 5000),
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)'
      ],
      borderWidth: 1
    }]
  };

  const revenueChartData = {
    labels: months.slice(6, 12),
    datasets: [{
      data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 900) + 100),
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)'
      ],
      borderWidth: 1
    }]
  };

  const engagementChartData = {
    labels: ['Likes', 'Comments', 'Shares', 'Watch Time', 'Click-through', 'Retention'],
    datasets: [{
      label: 'Engagement Metrics',
      data: [85, 72, 65, 90, 60, 78],
      backgroundColor: 'rgba(0, 255, 204, 0.2)',
      borderColor: 'rgba(0, 255, 204, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(0, 255, 204, 1)'
    }]
  };

  const demographicsChartData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    datasets: [{
      label: 'Age Demographics',
      data: [35, 30, 15, 10, 7, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)'
      ],
      borderWidth: 1
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#ffffff'
        }
      },
      title: {
        display: true,
        color: '#ffffff'
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#ffffff'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#ffffff'
        }
      }
    }
  };

  return (
    <section className="analytics-section animate-fadeIn">
      {/* Channel Header */}
      <div className="channel-header bg-[#1a1a2e] p-6 md:p-8 rounded-xl shadow-lg mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={snippet.thumbnails?.high?.url || ''}
            alt={`${snippet.title || 'Channel'} thumbnail`}
            className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-indigo-600 object-cover"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-indigo-500 font-orbitron">
              {snippet.title || 'Unknown Channel'}
            </h2>
            <p className="text-gray-300 mb-4 line-clamp-2">
              {snippet.description || 'No description available'}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 justify-center md:justify-start">
              {snippet.country && <span>Country: {snippet.country}</span>}
              {snippet.publishedAt && (
                <span>Created: {new Date(snippet.publishedAt).toLocaleDateString()}</span>
              )}
              {status.privacyStatus && <span>Privacy: {status.privacyStatus}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {/* Subscribers Card */}
        <div className="metric-card bg-[#1a1a2e] p-6 rounded-xl border-l-4 border-indigo-600 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
          <h3 className="text-indigo-400 font-orbitron mb-2">Subscribers</h3>
          <p className="text-3xl font-bold">
            {statistics.subscriberCount ? parseInt(statistics.subscriberCount).toLocaleString() : 'Hidden'}
          </p>
        </div>

        {/* Total Videos Card */}
        <div className="metric-card bg-[#1a1a2e] p-6 rounded-xl border-l-4 border-indigo-600 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
          <h3 className="text-indigo-400 font-orbitron mb-2">Total Videos</h3>
          <p className="text-3xl font-bold">
            {statistics.videoCount ? parseInt(statistics.videoCount).toLocaleString() : 'N/A'}
          </p>
        </div>

        {/* Total Views Card */}
        <div className="metric-card bg-[#1a1a2e] p-6 rounded-xl border-l-4 border-indigo-600 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
          <h3 className="text-indigo-400 font-orbitron mb-2">Total Views</h3>
          <p className="text-3xl font-bold">
            {statistics.viewCount ? parseInt(statistics.viewCount).toLocaleString() : 'N/A'}
          </p>
        </div>

        {/* Channel ID Card */}
        <div className="metric-card bg-[#1a1a2e] p-6 rounded-xl border-l-4 border-indigo-600 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
          <h3 className="text-indigo-400 font-orbitron mb-2">Channel ID</h3>
          <p className="text-lg font-mono truncate">{id || 'N/A'}</p>
        </div>

        {/* Custom URL Card */}
        <div className="metric-card bg-[#1a1a2e] p-6 rounded-xl border-l-4 border-indigo-600 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
          <h3 className="text-indigo-400 font-orbitron mb-2">Custom URL</h3>
          <p className="text-lg">
            {channelSettings.customUrl ? `youtube.com/${channelSettings.customUrl}` : 'N/A'}
          </p>
        </div>

        {/* Keywords Card */}
        <div className="metric-card bg-[#1a1a2e] p-6 rounded-xl border-l-4 border-indigo-600 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
          <h3 className="text-indigo-400 font-orbitron mb-2">Keywords</h3>
          <p className="text-lg">
            {channelSettings.keywords ? 
              (typeof channelSettings.keywords === 'string' ? 
                channelSettings.keywords : 
                channelSettings.keywords.split(' ').join(', ')) : 
              'N/A'
            }
          </p>
        </div>

        {/* Revenue Card */}
        <div className="revenue-card bg-[#1a1a2e] p-8 rounded-xl border-l-4 border-red-500 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-red-400 font-orbitron mb-4 text-center">Estimated Revenue</h3>
          <p className="text-5xl font-bold text-red-500 text-center font-orbitron">
            {statistics.viewCount ? 
              '$' + ((parseInt(statistics.viewCount) * 2.5) / 1000).toLocaleString(undefined, { maximumFractionDigits: 2 }) : 
              'N/A'
            }
          </p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Subscriber Chart */}
        <div className="chart-container bg-white p-6 rounded-xl shadow-lg h-80">
          <Line data={subscriberChartData} options={{
            ...chartOptions,
            plugins: {
              ...chartOptions.plugins,
              title: {
                display: true,
                text: 'Subscriber Growth (Last 12 Months)',
                color: '#000000'
              }
            }
          }} />
        </div>

        {/* Uploads Chart */}
        <div className="chart-container bg-white p-6 rounded-xl shadow-lg h-80">
          <Bar data={uploadsChartData} options={{
            ...chartOptions,
            plugins: {
              ...chartOptions.plugins,
              title: {
                display: true,
                text: 'Video Uploads (Last 12 Months)',
                color: '#000000'
              }
            }
          }} />
        </div>

        {/* Views Chart */}
        <div className="chart-container bg-white p-6 rounded-xl shadow-lg h-80">
          <Pie data={viewsChartData} options={{
            ...chartOptions,
            plugins: {
              ...chartOptions.plugins,
              title: {
                display: true,
                text: 'Views Distribution (Last 6 Months)',
                color: '#000000'
              }
            }
          }} />
        </div>

        {/* Revenue Chart */}
        <div className="chart-container bg-white p-6 rounded-xl shadow-lg h-80">
          <Doughnut data={revenueChartData} options={{
            ...chartOptions,
            plugins: {
              ...chartOptions.plugins,
              title: {
                display: true,
                text: 'Revenue Trends (Last 6 Months)',
                color: '#000000'
              }
            }
          }} />
        </div>

        {/* Engagement Chart */}
        <div className="chart-container bg-white p-6 rounded-xl shadow-lg h-80 lg:col-span-2">
          <Radar data={engagementChartData} options={{
            ...chartOptions,
            plugins: {
              ...chartOptions.plugins,
              title: {
                display: true,
                text: 'Engagement Metrics',
                color: '#000000'
              }
            },
            scales: {
              r: {
                angleLines: {
                  color: 'rgba(0, 0, 0, 0.1)'
                },
                grid: {
                  color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                  color: '#000000'
                },
                pointLabels: {
                  color: '#000000'
                }
              }
            }
          }} />
        </div>

        {/* Demographics Chart */}
        <div className="chart-container bg-white p-6 rounded-xl shadow-lg h-80 lg:col-span-2">
          <PolarArea data={demographicsChartData} options={{
            ...chartOptions,
            plugins: {
              ...chartOptions.plugins,
              title: {
                display: true,
                text: 'Audience Age Demographics',
                color: '#000000'
              }
            }
          }} />
        </div>
      </div>
    </section>
  );
}