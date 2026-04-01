'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { getProductBySlug, getProductsByCategory, getCategoryInfo, formatPrice, getDiscountPercent } from '@/lib/products'
import { TRUST_BADGES } from '@/lib/constants'
import { cn, getPlaceholderGradient } from '@/lib/utils'
import { ProductColor } from '@/lib/types'
import { StarIcon, CheckIcon, ArrowRightIcon } from './icons'
import ProductCard from './ProductCard'

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const product = getProductBySlug(slug)

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product?.colors[0] || { name: '', hex: '' })
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen bg-dark-900 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-volt-400 hover:text-volt-300 text-sm">← Back to Shop</Link>
        </div>
      </div>
    )
  }

  const discount = product.compareAtPrice ? getDiscountPercent(product.price, product.compareAtPrice) : 0
  const categoryInfo = getCategoryInfo(product.category)
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
          <Link href="/" className="hover:text-white/60">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-white/60">Shop</Link>
          <span>/</span>
          {categoryInfo && (
            <>
              <Link href={`/shop?category=${categoryInfo.slug}`} className="hover:text-white/60">{categoryInfo.name}</Link>
              <span>/</span>
            </>
          )}
          <span className="text-white/50">{product.name}</span>
        </nav>

        {/* Product section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <div className="aspect-square bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden" style={{ background: getPlaceholderGradient(selectedColor.hex) }}>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full border-2 border-white/10 flex items-center justify-center mb-3 bg-white/5">
                <span className="text-5xl opacity-50">🧦</span>
              </div>
              <p className="text-sm text-white/20">{product.name}</p>
              <p className="text-xs text-white/10 mt-1">Product Image</p>
            </div>
          </div>

          {/* Details */}
          <div>
            {/* Category + Badge */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs text-volt-400/70 uppercase tracking-widest font-medium">
                {categoryInfo?.name}
              </span>
              {product.badge && (
                <span className="px-2 py-0.5 bg-volt-500/10 text-volt-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-volt-500/20">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <StarIcon key={s} className={cn('w-4 h-4', s <= Math.floor(product.rating) ? 'text-volt-400' : 'text-white/10')} />
                ))}
              </div>
              <span className="text-sm text-white/40">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-white">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <>
                  <span className="text-lg text-white/30 line-through">{formatPrice(product.compareAtPrice)}</span>
                  <span className="px-2 py-0.5 bg-red-500/10 text-red-400 text-xs font-bold rounded-full">-{discount}%</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-white/50 leading-relaxed mb-6">{product.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-xs text-white/60 uppercase tracking-wider font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/50">
                    <CheckIcon className="w-4 h-4 text-volt-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Color selector */}
            <div className="mb-6">
              <h3 className="text-xs text-white/60 uppercase tracking-wider font-semibold mb-3">
                Color: <span className="text-white/80 normal-case">{selectedColor.name}</span>
              </h3>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      'w-8 h-8 rounded-full border-2 transition-all',
                      selectedColor.name === color.name
                        ? 'border-volt-400 scale-110 ring-2 ring-volt-400/30'
                        : 'border-white/10 hover:border-white/30'
                    )}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs text-white/60 uppercase tracking-wider font-semibold">Size</h3>
                <button className="text-xs text-volt-400 hover:text-volt-300">Size Guide</button>
              </div>
              <div className="flex gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      'w-12 h-12 rounded-lg text-sm font-medium transition-all border',
                      selectedSize === size
                        ? 'bg-volt-500 text-dark-900 border-volt-500'
                        : 'bg-dark-700 text-white/60 border-white/10 hover:border-white/30'
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex gap-3 mb-6">
              {/* Quantity */}
              <div className="flex items-center bg-dark-700 rounded-lg border border-white/10">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-medium text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to cart */}
              <button
                disabled={!selectedSize}
                className={cn(
                  'flex-1 py-3 rounded-lg font-bold text-sm transition-all',
                  selectedSize
                    ? 'bg-volt-500 hover:bg-volt-400 text-dark-900'
                    : 'bg-white/5 text-white/30 cursor-not-allowed'
                )}
              >
                {!selectedSize ? 'Select a Size' : `Add to Cart — ${formatPrice(product.price * quantity)}`}
              </button>
            </div>

            {!selectedSize && (
              <p className="text-xs text-white/30 mb-4">Please select a size to continue.</p>
            )}

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {TRUST_BADGES.map(badge => (
                <div key={badge.text} className="flex items-center gap-2 text-xs text-white/40">
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-white/5">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">You May Also Like</h2>
              <Link
                href={`/shop?category=${categoryInfo?.slug}`}
                className="inline-flex items-center gap-1 text-sm text-volt-400 hover:text-volt-300"
              >
                View All <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
