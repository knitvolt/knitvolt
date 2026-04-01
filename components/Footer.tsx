import Link from 'next/link'
import { FOOTER_LINKS, TRUST_BADGES, SITE } from '@/lib/constants'

function LightningBolt({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 0L4 46H30L28 80L60 34H34L36 0Z" fill="currentColor" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-white/5">
      {/* Trust badges */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.text} className="flex items-center gap-3 justify-center">
                <span className="text-xl">{badge.icon}</span>
                <span className="text-sm text-white/60 font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <LightningBolt className="w-6 h-7 text-volt-400" />
              <span className="text-lg font-black text-white">
                Knit<span className="text-volt-400">Volt</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              {SITE.tagline}. High-performance socks engineered for athletes who demand more.
            </p>
            <div className="flex gap-3">
              {/* Social icons placeholder */}
              {['Instagram', 'Twitter', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs text-white/40">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-volt-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Support</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-volt-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-volt-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">Terms</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
