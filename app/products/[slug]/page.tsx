import { notFound } from 'next/navigation'
import { products } from '@/lib/products'

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug)
  if (!product) return {}

  return {
    title: `${product.name} — Performance ${product.category} Socks`,
    description: product.shortDescription,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug)
  if (!product) notFound()

  // Import client component dynamically
  const ProductDetailPage = require('@/components/ProductDetailPage').default
  return <ProductDetailPage />
}
