// Site-wide constants for KnitVolt

export const SITE = {
  name: 'KnitVolt',
  tagline: 'Engineered for Every Stride',
  url: 'https://knitvolt.com',
  description: 'High-performance athletic socks with arch support, moisture-wicking, and anti-blister technology. From running to yoga, engineered for every stride.',
  currency: 'USD',
} as const

export const FREE_SHIPPING_THRESHOLD = 50 // Free shipping on orders $50+

export const SIZE_GUIDE = {
  S: { us: 'Men 4-6 / Women 5-7', eu: '35-38' },
  M: { us: 'Men 7-9 / Women 8-10', eu: '39-42' },
  L: { us: 'Men 10-12 / Women 11-13', eu: '43-46' },
  XL: { us: 'Men 13-15', eu: '47-49' },
} as const

export const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Running', href: '/shop?category=running' },
  { label: 'Training', href: '/shop?category=training' },
  { label: 'Yoga', href: '/shop?category=yoga' },
  { label: 'About', href: '/about' },
] as const

export const FOOTER_LINKS = {
  shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'Running', href: '/shop?category=running' },
    { label: 'Training', href: '/shop?category=training' },
    { label: 'Yoga & Pilates', href: '/shop?category=yoga' },
    { label: 'Compression', href: '/shop?category=compression' },
  ],
  support: [
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Press', href: '/press' },
  ],
} as const

export const TRUST_BADGES = [
  { icon: '🚚', text: 'Free Shipping $50+' },
  { icon: '↩️', text: '30-Day Returns' },
  { icon: '🛡️', text: 'Quality Guarantee' },
  { icon: '⚡', text: 'Ships in 1-2 Days' },
] as const
