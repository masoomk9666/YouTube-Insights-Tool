import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'YouTube Insights Tool - Free Analytics for Creators',
  description: 'Get detailed insights into any YouTube channel using our free analytics tool',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
