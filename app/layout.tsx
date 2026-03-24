import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aion AI | Deploy AI Systems That Cut Costs by 20-40% in 90 Days',
  description: 'AI deployment for Fortune 500 companies: strategy, architecture, and live deployment in months, not years. Guaranteed results or we iterate.',
  keywords: ['AI deployment', 'enterprise AI', 'operational efficiency', 'cost reduction', 'Fortune 500', 'AI implementation'],
  authors: [{ name: 'Aion Research' }],
  openGraph: {
    title: 'Aion AI | Enterprise AI Deployment in 90 Days',
    description: 'We deploy AI systems that cut operational costs by 20–40%. In 90 days. Guaranteed.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aion AI | Enterprise AI Deployment',
    description: 'Deploy AI systems that cut costs by 20-40% in 90 days. Guaranteed.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
