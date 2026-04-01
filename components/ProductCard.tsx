'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Product, ProductColor } from '@/lib/types'
import { formatPrice, getDiscountPercent } from '@/lib/products'
import { getPlaceholderGradient, cn } from '@/lib/utils'
import { StarIcon } from './icons'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0])
  const discount = product.compareAtPrice ? getDiscountPercent(product.price, product.compareAtPrice) : 0

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="bg-dark-700 rounded-2xl overflow-hidden border border-white/5 hover:border-volt-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-volt-500/5">
        {/* Image area */}
        <div className="relative aspect-[4/3] overflow-hidden" style={{ background: getPlaceholderGradient(selectedColor.hex) }}>
          {/* Placeholder visual - will be replaced with real images */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full border-2 border-white/10 flex items-center justify-center mb-2 bg-white/5">
                <span className="text-3xl opacity-50">🧦</span>
              </div>
              <p className="text-xs text-white/30">Product Image</p>
            </div>
          </div>

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 px-2.5 py-1 bg-volt-500 text-dark-900 text-[10px] font-bold uppercase tracking-wider rounded-full">
              {product.badge}
            </div>
          )}

          {/* Discount badge */}
          {discount > 0 && (
            <div className="absolute top-3 right-3 px-2.5 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full">
              -{discount}%
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="p-4">
          {/* Category */}
          <p className="text-[10px] text-volt-400/70 uppercase tracking-widest font-medium mb-1">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="text-sm font-semibold text-white group-hover:text-volt-400 transition-colors mb-1">
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-white/40 mb-3 line-clamp-1">
            {product.shortDescription}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={cn(
                    'w-3 h-3',
                    star <= Math.floor(product.rating) ? 'text-volt-400' : 'text-white/10'
                  )}
                />
              ))}
            </div>
            <span className="text-[10px] text-white/30">({product.reviewCount})</span>
          </div>

          {/* Colors */}
          <div className="flex gap-1.5 mb-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedColor(color) }}
                className={cn(
                  'w-4 h-4 rounded-full border-2 transition-all',
                  selectedColor.name === color.name
                    ? 'border-volt-400 scale-110'
                    : 'border-white/10 hover:border-white/30'
                )}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-white">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-xs text-white/30 line-through">{formatPrice(product.compareAtPrice)}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
