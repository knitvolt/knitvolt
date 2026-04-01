'use client'

import { useState, useEffect } from 'react'

function LightningBolt({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 0L4 46H30L28 80L60 34H34L36 0Z" fill="currentColor" />
    </svg>
  )
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return (
      <div className="flex gap-4 sm:gap-6 justify-center">
        {['--', '--', '--', '--'].map((v, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-dark-700 border border-white/10 rounded-xl flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-bold text-white/40">{v}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const blocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Sec' },
  ]

  return (
    <div className="flex gap-3 sm:gap-5 justify-center">
      {blocks.map((block, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-dark-700 border border-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-bold text-volt-400 countdown-num font-mono">
              {String(block.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-white/40 mt-2 uppercase tracking-widest">{block.label}</span>
        </div>
      ))}
    </div>
  )
}

function FeatureItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3 text-white/70">
      <span className="text-volt-400 text-lg">{icon}</span>
      <span className="text-sm sm:text-base">{text}</span>
    </div>
  )
}

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  // Launch date: June 1, 2026
  const launchDate = new Date('2026-06-01T00:00:00')

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
      if (!res.ok) {
        const data = await res.json()
        setErrorMessage(data.error || 'Something went wrong')
        throw new Error(data.error)
      }
      setStatus('success')
      setEmail('')
      setErrorMessage('')
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => { setStatus('idle'); setErrorMessage('') }, 8000)
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col">
      {/* Subtle background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-volt-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-volt-700/3 rounded-full blur-[100px]" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="max-w-2xl w-full text-center">
          {/* Logo */}
          <div className="fade-in-up mb-6">
            <div className="inline-flex items-center gap-3">
              <LightningBolt className="w-10 h-12 sm:w-12 sm:h-14 text-volt-400 lightning-glow" />
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                Knit<span className="text-volt-400">Volt</span>
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="fade-in-up text-volt-400/80 text-sm sm:text-base font-medium uppercase tracking-[0.3em] mb-8">
            Engineered for Every Stride
          </p>

          {/* Hero headline */}
          <h1 className="fade-in-up-delay text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Performance Socks<br />
            <span className="text-white/40">Are Getting an Upgrade</span>
          </h1>

          <p className="fade-in-up-delay text-base sm:text-lg text-white/50 max-w-lg mx-auto mb-10 leading-relaxed">
            Arch support. Moisture-wicking. Anti-blister. Zone compression.
            Everything your feet need, nothing they don&apos;t.
          </p>

          {/* Countdown */}
          <div className="fade-in-up-delay-2 mb-10">
            <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4">Launching In</p>
            <CountdownTimer targetDate={launchDate} />
          </div>

          {/* Feature highlights */}
          <div className="fade-in-up-delay-2 flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
            <FeatureItem icon="⚡" text="Zone Compression" />
            <FeatureItem icon="💧" text="Moisture Wicking" />
            <FeatureItem icon="🛡️" text="Anti-Blister" />
            <FeatureItem icon="🦶" text="Arch Support" />
          </div>

          {/* Email signup */}
          <div className="fade-in-up-delay-2 max-w-md mx-auto">
            {status === 'success' ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-6 py-4">
                <p className="text-emerald-400 font-medium">You&apos;re on the list! ⚡</p>
                <p className="text-white/40 text-sm mt-1">We&apos;ll notify you when we launch.</p>
              </div>
            ) : status === 'error' ? (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-6 py-4">
                <p className="text-red-400 font-medium">Something went wrong</p>
                {errorMessage && <p className="text-red-400/70 text-sm mt-1">{errorMessage}</p>}
                <p className="text-white/40 text-sm mt-1">Please try again later.</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-white/40 mb-3">
                  Be the first to know. Get early access + 15% off.
                </p>
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-dark-700 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm sm:text-base transition-all hover:border-white/20 focus:border-volt-500/50"
                    disabled={status === 'loading'}
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-5 sm:px-7 py-3 bg-volt-500 hover:bg-volt-400 text-dark-900 font-semibold rounded-xl transition-all text-sm sm:text-base disabled:opacity-50 whitespace-nowrap"
                  >
                    {status === 'loading' ? '...' : 'Notify Me'}
                  </button>
                </form>
              </>
            )}
            <p className="text-xs text-white/20 mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center">
        <p className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} KnitVolt. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
