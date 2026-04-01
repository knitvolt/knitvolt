// Product types for KnitVolt

export interface Product {
  id: string
  name: string
  slug: string
  category: ProductCategory
  price: number
  compareAtPrice?: number
  description: string
  shortDescription: string
  features: string[]
  sizes: string[]
  colors: ProductColor[]
  images: string[]
  badge?: string
  rating: number
  reviewCount: number
  inStock: boolean
}

export interface ProductColor {
  name: string
  hex: string
  image?: string
}

export type ProductCategory = 
  | 'running'
  | 'training'
  | 'yoga'
  | 'low-cut'
  | 'compression'
  | 'everyday'

export interface CartItem {
  product: Product
  quantity: number
  selectedColor: ProductColor
  selectedSize: string
}

export interface CategoryInfo {
  id: ProductCategory
  name: string
  description: string
  icon: string
  slug: string
}
