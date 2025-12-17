import type { Metadata } from 'next'
import './globals.css'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import Script from 'next/script'

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

{/* <Script src="https://www.chatbase.co/embed.min.js" id="z2c2HSfKnCTh5J4650V0I"></Script> */}
<Script src="https://zweelie.ngrok.app/conversation-widget-iframe/embed.js" id="cbb1154c-8594-4082-afe2-3d54c974292e"></Script>

      <body>
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  )
}


