import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'SK - Photography',
  description: 'Enchanting, Evocative, Inspiring. Professional photography portfolio specializing in weddings, fashion, and commercial work.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/SK Logo.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/SK Logo.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/SK Logo.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/SK Logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Header/>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
