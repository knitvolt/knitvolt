import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/constants'

export const metadata = {
  title: {
    default: `${SITE.name} ⚡ ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: 'performance socks, running socks, athletic socks, KnitVolt, arch support, moisture wicking, anti blister, compression socks, yoga socks',
  openGraph: {
    title: `${SITE.name} ⚡ ${SITE.tagline}`,
    description: SITE.description,
    type: 'website',
    url: SITE.url,
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} ⚡ Performance Socks`,
    description: SITE.tagline,
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
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
