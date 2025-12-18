const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

// RPM rates by country
export const rpmRates = {
  'US': 7.53,
  'GB': 5.62,
  'NZ': 5.56,
  'AE': 2.33,
  'PK': 2.5,
  'IN': 2.5
};

export const DEFAULT_RPM = 2.0;

// Extract channel ID from YouTube URL
export function extractChannelId(url) {
  const channelIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/channel\/([^\/\?\&]+)/i);
  if (channelIdMatch) return channelIdMatch[1];
  
  const customUrlMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/c\/([^\/\?\&]+)/i);
  if (customUrlMatch) return null;
  
  const userIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/user\/([^\/\?\&]+)/i);
  if (userIdMatch) return null;
  
  return null;
}

// Search for channel by name
export async function searchChannelByName(query) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=channel&maxResults=1&key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      return null;
    }
    
    return data.items[0].id.channelId;
  } catch (error) {
    console.error('Search Error:', error);
    throw new Error('Failed to search for channel');
  }
}

// Fetch channel data
export async function fetchChannelData(channelId) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,status,brandingSettings&id=${channelId}&key=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      throw new Error('No channel data found');
    }
    
    return data.items[0];
  } catch (error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch channel data');
  }
}

// Calculate estimated revenue
export function calculateRevenue(views, countryCode) {
  const rpm = rpmRates[countryCode] || DEFAULT_RPM;
  return (views * rpm) / 1000;
}

// Format large numbers
export function formatNumber(num) {
  return parseInt(num || 0).toLocaleString();
}

// Format currency
export function formatCurrency(amount) {
  return '$' + amount.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

// Generate random data for charts
export function generateRandomData(count, min, max) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return data;
}