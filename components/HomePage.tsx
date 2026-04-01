'use client'

import { useState } from 'react'
import Link from 'next/link'
import { products, categories } from '@/lib/products'
import { TRUST_BADGES } from '@/lib/constants'
import { CheckIcon, ArrowRightIcon, StarIcon } from './icons'
import ProductCard from './ProductCard'

function LightningBolt({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 0L4 46H30L28 80L60 34H34L36 0Z" fill="currentColor" />
    </svg>
  )
}

// ===== Hero Section =====
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-volt-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-volt-700/3 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-blue-500/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <div className="fade-in-up inline-flex items-center gap-2 px-3 py-1.5 bg-volt-500/10 border border-volt-500/20 rounded-full mb-6">
              <LightningBolt className="w-3.5 h-4 text-volt-400" />
              <span className="text-xs text-volt-400 font-medium uppercase tracking-wider">Performance Socks</span>
            </div>

            <h1 className="fade-in-up text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] mb-6">
              Engineered for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-volt-400 to-volt-300">
                Every Stride
              </span>
            </h1>

            <p className="fade-in-up-delay text-base sm:text-lg text-white/50 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Arch support. Moisture-wicking. Anti-blister. Zone compression.
              Everything your feet need to go the extra mile — nothing they don&apos;t.
            </p>

            <div className="fade-in-up-delay flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-volt-500 hover:bg-volt-400 text-dark-900 font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-volt-500/20 text-sm sm:text-base"
              >
                Shop Now
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all text-sm sm:text-base"
              >
                Our Story
              </Link>
            </div>

            {/* Social proof */}
            <div className="fade-in-up-delay-2 mt-10 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['👤', '👤', '👤', '👤', '👤'].map((emoji, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-dark-600 border-2 border-dark-900 flex items-center justify-center text-xs">
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1,2,3,4,5].map(s => (
                    <StarIcon key={s} className="w-3.5 h-3.5 text-volt-400" />
                  ))}
                </div>
                <p className="text-xs text-white/40">2,000+ athletes trust KnitVolt</p>
              </div>
            </div>
          </div>

          {/* Right: Product showcase placeholder */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main product image placeholder */}
              <div className="w-full aspect-square bg-gradient-to-br from-volt-500/10 via-dark-700 to-volt-700/5 rounded-3xl border border-white/5 flex items-center justify-center">
                <div className="text-center">
                  <LightningBolt className="w-24 h-30 text-volt-400/20 mx-auto mb-4" />
                  <p className="text-white/20 text-sm">Hero Product Image</p>
                  <p className="text-white/10 text-xs mt-1">RunPro Elite — $16.99</p>
                </div>
              </div>

              {/* Floating feature cards */}
              <div className="absolute -left-8 top-1/4 bg-dark-600/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <span className="text-volt-400">⚡</span>
                  <span className="text-xs font-medium text-white/80">Zone Compression</span>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/3 bg-dark-600/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 animate-float-slow-delayed">
                <div className="flex items-center gap-2">
                  <span className="text-volt-400">🛡️</span>
                  <span className="text-xs font-medium text-white/80">Anti-Blister</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== Featured Products Section =====
function FeaturedProducts() {
  const featured = products.filter(p => p.badge).slice(0, 4)

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs text-volt-400 uppercase tracking-[0.2em] font-medium">Featured</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Athlete Favorites
          </h2>
          <p className="text-white/40 max-w-md mx-auto">
            The socks our community can&apos;t stop talking about.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-volt-400 hover:text-volt-300 font-medium transition-colors"
          >
            View All Products
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ===== Technology Section =====
function TechnologySection() {
  const techFeatures = [
    {
      icon: '🦶',
      title: 'Targeted Arch Support',
      description: 'Engineered compression zones support your natural arch, reducing fatigue and improving stability during every stride.',
    },
    {
      icon: '💧',
      title: 'Moisture-Wicking Fibers',
      description: 'Advanced synthetic blend pulls sweat away from your skin. Your feet stay dry, cool, and blister-free from start to finish.',
    },
    {
      icon: '🛡️',
      title: 'Anti-Blister Design',
      description: 'Seamless toe construction and strategic cushioning eliminate hotspots. Run further, lift heavier, train longer.',
    },
    {
      icon: '⚡',
      title: 'Zone Compression',
      description: 'Graduated compression in key zones improves blood flow, speeds recovery, and enhances overall performance.',
    },
    {
      icon: '🌬️',
      title: '360° Ventilation',
      description: 'Breathable mesh panels keep air flowing where you need it most. No more swamp foot, ever.',
    },
    {
      icon: '♻️',
      title: 'Built to Last',
      description: 'Reinforced heel and toe with fade-resistant yarns. Wash after wash, they perform like day one.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-dark-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs text-volt-400 uppercase tracking-[0.2em] font-medium">Technology</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            What Makes KnitVolt Different
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">
            Every detail is engineered with one goal: make your feet perform better, feel better, last longer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-dark-700/50 hover:bg-dark-700 rounded-2xl border border-white/5 hover:border-volt-500/10 transition-all duration-300"
            >
              <span className="text-2xl mb-4 block">{feature.icon}</span>
              <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== Categories Section =====
function CategoriesSection() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs text-volt-400 uppercase tracking-[0.2em] font-medium">Categories</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Find Your Perfect Pair
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => {
            const count = products.filter(p => p.category === cat.id).length
            return (
              <Link
                key={cat.id}
                href={`/shop?category=${cat.slug}`}
                className="group p-6 sm:p-8 bg-dark-700/30 hover:bg-dark-700/80 rounded-2xl border border-white/5 hover:border-volt-500/15 transition-all duration-300 text-center"
              >
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{cat.icon}</span>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1">{cat.name}</h3>
                <p className="text-xs text-white/30 mb-3 hidden sm:block">{cat.description}</p>
                <span className="text-xs text-volt-400/60">{count} products</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ===== Testimonials Section =====
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Mike R.',
      role: 'Marathon Runner',
      text: 'Finally, socks that actually prevent blisters on 20+ mile runs. The arch support is incredible. I\'ve converted my entire running group.',
      rating: 5,
    },
    {
      name: 'Sarah L.',
      role: 'CrossFit Coach',
      text: 'The TrainMax socks grip perfectly during box jumps and rope climbs. No more sliding around in my shoes. Best training socks I\'ve owned.',
      rating: 5,
    },
    {
      name: 'James K.',
      role: 'Yoga Instructor',
      text: 'The YogaGrip socks changed my practice. The five-toe design gives me better balance in tree pose and the silicone grips actually work.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-dark-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs text-volt-400 uppercase tracking-[0.2em] font-medium">Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Loved by Athletes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 bg-dark-700/30 rounded-2xl border border-white/5">
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(s => (
                  <StarIcon key={s} className="w-4 h-4 text-volt-400" />
                ))}
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/30">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== CTA Section =====
function CTASection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-volt-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Upgrade Your Sock Game?
        </h2>
        <p className="text-white/40 mb-8 max-w-md mx-auto">
          Join 2,000+ athletes. Get early access to new drops and 15% off your first order.
        </p>

        <div className="max-w-md mx-auto">
          {status === 'success' ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-6 py-4">
              <p className="text-emerald-400 font-medium">You&apos;re on the list! ⚡</p>
              <p className="text-white/40 text-sm mt-1">Check your inbox for your 15% discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-dark-700 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm transition-all hover:border-white/20 focus:border-volt-500/50 focus:outline-none"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 sm:px-8 py-3.5 bg-volt-500 hover:bg-volt-400 text-dark-900 font-bold rounded-xl transition-all text-sm whitespace-nowrap disabled:opacity-50"
              >
                {status === 'loading' ? '...' : 'Get 15% Off'}
              </button>
            </form>
          )}
          <p className="text-xs text-white/20 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}

// ===== Trust Badges (for footer area) =====
function TrustBadgesSection() {
  return (
    <section className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_BADGES.map((badge) => (
            <div key={badge.text} className="text-center">
              <span className="text-2xl mb-2 block">{badge.icon}</span>
              <p className="text-sm text-white/50 font-medium">{badge.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== Main Page =====
export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <HeroSection />
      <FeaturedProducts />
      <TechnologySection />
      <CategoriesSection />
      <TestimonialsSection />
      <CTASection />
      <TrustBadgesSection />
    </div>
  )
}
