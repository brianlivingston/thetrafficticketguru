import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Beyond Ticket Defence - We Deliver Peace of Mind',
  description: 'Over $10M in fines and over 25,000+ cases protected across Ontario. Your easy-to-use solution for traffic ticket defense.',
  icons: {
    icon: '/images/favicon-32x32.png',
    apple: '/images/favicon-32x32.png',
    shortcut: '/images/favicon-32x32.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


