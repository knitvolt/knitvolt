import { Suspense } from 'react'
import ShopPage from '@/components/ShopPage'

export const metadata = {
  title: 'Shop All Performance Socks',
  description: 'Browse our full collection of high-performance athletic socks. Running, training, yoga, compression — engineered for every stride.',
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark-900" />}>
      <ShopPage />
    </Suspense>
  )
}
