import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'
import React from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title:
    'Sites By Miguel | Web Design for Student Organizations and Small Businesses',
  description:
    'Sites By Miguel builds clean, modern websites for student organizations, small businesses, nonprofits, and personal brands. Based at the University of Michigan.',
  keywords:
    'web design, student organization websites, University of Michigan web developer, small business websites, Sites By Miguel, web development, React, Next.js, nonprofit websites, campus group websites',
  openGraph: {
    title:
      'Sites By Miguel | Web Design for Student Organizations and Small Businesses',
    description:
      'Clean, modern websites for student organizations, small businesses, nonprofits, and personal brands.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-white text-ink-900 antialiased`}>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
