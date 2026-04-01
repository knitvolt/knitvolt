// Utility functions for KnitVolt

/**
 * Combine multiple class names, filtering out falsy values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Format star rating to display
 */
export function renderStars(rating: number): { full: number; half: boolean; empty: number } {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return { full, half, empty }
}

/**
 * Generate placeholder color for product images
 */
export function getPlaceholderGradient(hex: string): string {
  return `linear-gradient(135deg, ${hex}22, ${hex}44, ${hex}22)`
}
