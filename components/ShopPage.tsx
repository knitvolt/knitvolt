'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { products, categories, getProductsByCategory, getCategoryInfo } from '@/lib/products'
import { cn } from '@/lib/utils'
import { ProductCategory } from '@/lib/types'
import ProductCard from './ProductCard'
import { CheckIcon } from './icons'

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest'

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low → High' },
  { value: 'price-high', label: 'Price: High → Low' },
  { value: 'rating', label: 'Top Rated' },
]

function sortProducts(prods: typeof products, sort: SortOption) {
  const sorted = [...prods]
  switch (sort) {
    case 'price-low': return sorted.sort((a, b) => a.price - b.price)
    case 'price-high': return sorted.sort((a, b) => b.price - a.price)
    case 'rating': return sorted.sort((a, b) => b.rating - a.rating)
    default: return sorted
  }
}

export default function ShopPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') as ProductCategory | null

  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>(initialCategory || 'all')
  const [sortBy, setSortBy] = useState<SortOption>('featured')

  const filteredProducts = activeCategory === 'all'
    ? products
    : getProductsByCategory(activeCategory)

  const displayedProducts = sortProducts(filteredProducts, sortBy)

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {activeCategory === 'all' ? 'All Products' : getCategoryInfo(activeCategory)?.name}
          </h1>
          <p className="text-white/40 text-sm">
            {displayedProducts.length} products
            {activeCategory !== 'all' && getCategoryInfo(activeCategory) && (
              <> · {getCategoryInfo(activeCategory)!.description}</>
            )}
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                activeCategory === 'all'
                  ? 'bg-volt-500 text-dark-900'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
              )}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  activeCategory === cat.id
                    ? 'bg-volt-500 text-dark-900'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                )}
              >
                <span className="mr-1.5">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-4 py-2 bg-dark-700 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-volt-500/50"
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {displayedProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/30">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
