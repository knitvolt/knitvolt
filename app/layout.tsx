import './globals.css'

export const metadata = {
  title: 'KnitVolt ⚡ Performance Socks — Coming Soon',
  description: 'Engineered for every stride. KnitVolt performance socks with arch support, moisture-wicking, and anti-blister technology. Launching soon.',
  keywords: 'performance socks, running socks, athletic socks, KnitVolt, arch support, moisture wicking',
  openGraph: {
    title: 'KnitVolt ⚡ Performance Socks — Coming Soon',
    description: 'Engineered for every stride. Performance socks with arch support, moisture-wicking, and anti-blister technology.',
    type: 'website',
    url: 'https://knitvolt.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KnitVolt ⚡ Performance Socks',
    description: 'Engineered for every stride. Launching soon.',
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
