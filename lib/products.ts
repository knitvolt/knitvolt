import { Product, CategoryInfo, ProductCategory } from './types'

export const categories: CategoryInfo[] = [
  {
    id: 'running',
    name: 'Running Socks',
    description: 'Engineered for speed, comfort, and endurance on every run.',
    icon: '🏃',
    slug: 'running',
  },
  {
    id: 'training',
    name: 'Training Socks',
    description: 'Built tough for high-intensity workouts and cross-training.',
    icon: '💪',
    slug: 'training',
  },
  {
    id: 'yoga',
    name: 'Yoga & Pilates',
    description: 'Grip-focused, breathable socks for mindful movement.',
    icon: '🧘',
    slug: 'yoga',
  },
  {
    id: 'low-cut',
    name: 'Low-Cut / No-Show',
    description: 'Invisible comfort that stays hidden inside your shoes.',
    icon: '👟',
    slug: 'low-cut',
  },
  {
    id: 'compression',
    name: 'Compression Socks',
    description: 'Targeted compression for recovery and performance.',
    icon: '🦵',
    slug: 'compression',
  },
  {
    id: 'everyday',
    name: 'Everyday Performance',
    description: 'All-day comfort with performance tech built in.',
    icon: '✨',
    slug: 'everyday',
  },
]

export const products: Product[] = [
  // ===== Running =====
  {
    id: 'rv-run-pro',
    name: 'RunPro Elite',
    slug: 'runpro-elite',
    category: 'running',
    price: 16.99,
    compareAtPrice: 19.99,
    description: 'Our flagship running sock. Features targeted arch compression, ventilated zones for maximum breathability, and an anti-blister tab to protect your Achilles. Built for runners who demand the best.',
    shortDescription: 'Targeted arch support + ventilated zones for race-day performance.',
    features: ['Targeted Arch Compression', 'Ventilated Mesh Zones', 'Anti-Blister Achilles Tab', 'Moisture-Wicking Fibers', 'Reinforced Heel & Toe'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Volt Yellow', hex: '#FACC15' },
      { name: 'Stealth Black', hex: '#1a1a1a' },
      { name: 'Ocean Blue', hex: '#0EA5E9' },
    ],
    images: [],
    badge: 'BESTSELLER',
    rating: 4.8,
    reviewCount: 324,
    inStock: true,
  },
  {
    id: 'rv-run-lite',
    name: 'RunLite',
    slug: 'runlite',
    category: 'running',
    price: 14.99,
    description: 'Lightweight running sock for tempo runs and speedwork. Ultra-thin profile with strategic cushioning under the forefoot. Barely there, but still protective.',
    shortDescription: 'Ultra-lightweight for tempo runs and speedwork.',
    features: ['Ultra-Light Profile', 'Forefoot Cushioning', 'Seamless Toe Box', 'Quick-Dry Fabric'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Stealth Black', hex: '#1a1a1a' },
      { name: 'Cloud White', hex: '#F5F5F5' },
      { name: 'Volt Yellow', hex: '#FACC15' },
    ],
    images: [],
    rating: 4.6,
    reviewCount: 187,
    inStock: true,
  },
  {
    id: 'rv-run-trail',
    name: 'TrailGrip',
    slug: 'trailgrip',
    category: 'running',
    price: 17.99,
    compareAtPrice: 20.99,
    description: 'Designed for trail runners. Extra cushioning for rocky terrain, reinforced ankle protection, and moisture management for creek crossings. Your feet will thank you.',
    shortDescription: 'Extra cushioning + ankle protection for trail runners.',
    features: ['Extra Thick Cushioning', 'Ankle Protection Panel', 'Water-Resistant Fibers', 'Reinforced Toe Guard', 'Reflective Details'],
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Forest Green', hex: '#16A34A' },
      { name: 'Earth Brown', hex: '#92400E' },
      { name: 'Stealth Black', hex: '#1a1a1a' },
    ],
    images: [],
    badge: 'NEW',
    rating: 4.7,
    reviewCount: 96,
    inStock: true,
  },

  // ===== Training =====
  {
    id: 'rv-train-max',
    name: 'TrainMax',
    slug: 'trainmax',
    category: 'training',
    price: 15.99,
    description: 'All-around training sock built for the gym. Full-foot cushioning absorbs impact during jumps and lifts. Grip pads on the sole prevent slipping during bodyweight exercises.',
    shortDescription: 'Full-foot cushioning + grip pads for gym sessions.',
    features: ['Full-Foot Cushioning', 'Sole Grip Pads', 'Ankle Stability Band', 'Odor-Resistant Treatment', 'Breathable Mesh Top'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Stealth Black', hex: '#1a1a1a' },
      { name: 'Volt Yellow', hex: '#FACC15' },
      { name: 'Rally Red', hex: '#EF4444' },
    ],
    images: [],
    badge: 'POPULAR',
    rating: 4.7,
    reviewCount: 256,
    inStock: true,
  },
  {
    id: 'rv-train-hi',
    name: 'TrainHi Crew',
    slug: 'trainhi-crew',
    category: 'training',
    price: 14.99,
    description: 'Crew-length training sock with extended ankle support. Perfect for basketball, crossfit, and HIIT. Extra padding at the shin and ankle for protection during lateral movements.',
    shortDescription: 'Extended ankle support for basketball, crossfit, HIIT.',
    features: ['Extended Ankle Support', 'Shin Padding', 'Lateral Movement Stability', 'Moisture Wicking'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Stealth Black', hex: '#1a1a1a' },
      { name: 'Cloud White', hex: '#F5F5F5' },
    ],
    images: [],
    rating: 4.5,
    reviewCount: 142,
    inStock: true,
  },

  // ===== Yoga =====
  {
    id: 'rv-yoga-grip',
    name: 'YogaGrip',
    slug: 'yogagrip',
    category: 'yoga',
    price: 12.99,
    description: 'Non-slip yoga socks with silicone grip dots covering the entire sole. Five-toe design allows natural toe splay for better balance. Open-top design keeps feet cool.',
    shortDescription: 'Full-sole silicone grip + five-toe design for balance.',
    features: ['Full-Sole Silicone Grip', 'Five-Toe Design', 'Breathable Open Top', 'Arch Support Band'],
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Lavender', hex: '#A78BFA' },
      { name: 'Blush Pink', hex: '#FDA4AF' },
      { name: 'Stealth Black', hex: '#1a1a1a' },
    ],
    images: [],
    rating: 4.6,
    reviewCount: 198,
    inStock: true,
  },
  {
    id: 'rv-yoga-pilates',
    name: 'Pilates Pro',
    slug: 'pilates-pro',
    category: 'yoga',
    price: 13.99,
    description: 'Classic pilates sock with toe and heel grip pads. Low-profile design that feels like a second skin. Perfect for barre, pilates, and studio sessions.',
    shortDescription: 'Minimalist grip socks for pilates and barre.',
    features: ['Toe & Heel Grip Pads', 'Second-Skin Fit', 'Breathable Cotton Blend', 'Non-Roll Cuff'],
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Cloud White', hex: '#F5F5F5' },
      { name: 'Blush Pink', hex: '#FDA4AF' },
      { name: 'Mint Green', hex: '#6EE7B7' },
    ],
    images: [],
    rating: 4.5,
    reviewCount: 134,
    inStock: true,
  },

  // ===== Low-Cut / No-Show =====
  {
    id: 'rv-low-ghost',
    name: 'GhostCut',
    slug: 'ghostcut',
    category: 'low-cut',
    price: 12.99,
    description: 'Truly no-show sock that stays invisible in loafers, sneakers, and low-top shoes. Silicone heel grip prevents slipping down. Still packed with arch support and moisture wicking.',
    shortDescription: 'Invisible fit that stays put, with arch support built in.',
    features: ['Silicone Heel Grip', 'No-Show Cut', 'Arch Support Band', 'Moisture Wicking'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Stealth Black', hex: '#1a1a1a' },
      { name: 'Cloud White', hex: '#F5F5F5' },
      { name: 'Volt Yellow', hex: '#FACC15' },
    ],
    images: [],
    badge: 'BESTSELLER',
    rating: 4.8,
    reviewCount: 412,
    inStock: true,
  },
  {
    id: 'rv-low-tab',
    name: 'TabRunner',
    slug: 'tabrunner',
    category: 'low-cut',
    price: 13.99,
    description: 'Low-cut tab sock designed for running shoes. The rear tab protects against heel chafing and makes the sock easy to pull on. Perfect for daily runners.',
    shortDescription: 'Tab protection + low-cut design for everyday runners.',
    features: ['Heel Protection Tab', 'Low-Cut Profile', 'Blister-Free Guarantee', 'Breathable Mesh'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Stealth Black', hex: '#1a1a1a' },
      { name: 'Ocean Blue', hex: '#0EA5E9' },
      { name: 'Cloud White', hex: '#F5F5F5' },
    ],
    images: [],
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
  },

  // ===== Compression =====
  {
    id: 'rv-comp-recover',
    name: 'RecoverMax',
    slug: 'recovermax',
    category: 'compression',
    price: 18.99,
    compareAtPrice: 22.99,
    description: 'Graduated compression sock (15-20 mmHg) designed for post-workout recovery. Improves blood flow, reduces muscle fatigue, and minimizes swelling. A must-have for serious athletes.',
    shortDescription: '15-20mmHg graduated compression for recovery and performance.',
    features: ['Graduated 15-20mmHg', 'Improved Blood Flow', 'Muscle Fatigue Reduction', 'Swell Control', 'Breathable Nylon Blend'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Stealth Black', hex: '#1a1a1a' },
      { name: 'Navy Blue', hex: '#1E3A5F' },
    ],
    images: [],
    badge: 'PREMIUM',
    rating: 4.9,
    reviewCount: 267,
    inStock: true,
  },
  {
    id: 'rv-comp-fly',
    name: 'FlyComp',
    slug: 'flycomp',
    category: 'compression',
    price: 16.99,
    description: 'Light compression sock for travel and long days on your feet. 10-15 mmHg compression keeps legs feeling fresh during flights, long shifts, or all-day events.',
    shortDescription: 'Light 10-15mmHg compression for travel and long days.',
    features: ['Light 10-15mmHg', 'Travel-Ready', 'DVT Prevention', 'All-Day Freshness', 'Calf Support'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Cloud White', hex: '#F5F5F5' },
      { name: 'Stealth Black', hex: '#1a1a1a' },
      { name: 'Charcoal Grey', hex: '#4B5563' },
    ],
    images: [],
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
  },

  // ===== Everyday Performance =====
  {
    id: 'rv-every-essential',
    name: 'Essential',
    slug: 'essential',
    category: 'everyday',
    price: 12.99,
    description: 'Your everyday sock, upgraded. Performance moisture-wicking fabric meets casual comfort. Works with everything from sneakers to boots. The sock you reach for every day.',
    shortDescription: 'Performance tech meets everyday comfort.',
    features: ['Moisture-Wicking Cotton', 'Arch Support', 'Reinforced Heel', 'Comfort Toe Seam'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Stealth Black', hex: '#1a1a1a' },
      { name: 'Cloud White', hex: '#F5F5F5' },
      { name: 'Charcoal Grey', hex: '#4B5563' },
      { name: 'Navy Blue', hex: '#1E3A5F' },
    ],
    images: [],
    rating: 4.7,
    reviewCount: 531,
    inStock: true,
  },
  {
    id: 'rv-every-crew',
    name: 'Crew Classic',
    slug: 'crew-classic',
    category: 'everyday',
    price: 14.99,
    description: 'Classic crew-length performance sock. Cushioned footbed, ribbed cuff that stays up without digging in, and a fit that feels broken-in from day one. The do-everything sock.',
    shortDescription: 'Classic crew fit with performance cushioning.',
    features: ['Cushioned Footbed', 'Stay-Up Ribbed Cuff', 'Comfort Toe Seam', 'Odor-Resistant', 'Everyday Durability'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Stealth Black', hex: '#1a1a1a' },
      { name: 'Cloud White', hex: '#F5F5F5' },
      { name: 'Earth Brown', hex: '#92400E' },
    ],
    images: [],
    rating: 4.6,
    reviewCount: 298,
    inStock: true,
  },
]

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter(p => p.category === category)
}

export function getCategoryInfo(categoryId: ProductCategory): CategoryInfo | undefined {
  return categories.find(c => c.id === categoryId)
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}

export function getDiscountPercent(price: number, compareAtPrice: number): number {
  return Math.round((1 - price / compareAtPrice) * 100)
}
