'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Work' },
  { href: '/#student-orgs', label: 'Student Orgs' },
  { href: '/#packages', label: 'Packages' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/75 backdrop-blur-xl border-b border-ink-200/70'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 text-white shadow-[0_8px_20px_-8px_rgba(15,23,42,0.5)] transition-transform duration-300 group-hover:-rotate-3">
              <span className="text-sm font-bold tracking-tight">M</span>
              <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 ring-2 ring-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-semibold tracking-tight text-ink-900">
                Sites by Miguel
              </span>
              <span className="mt-0.5 text-[11px] font-medium tracking-wide text-ink-500">
                Web Studio
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/60 p-1 ring-1 ring-ink-200/80 backdrop-blur">
            {nav.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? 'text-white bg-ink-900 shadow-[0_6px_18px_-6px_rgba(15,23,42,0.55)]'
                      : 'text-ink-600 hover:text-ink-900'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(124,58,237,0.7)] transition-all duration-300 hover:shadow-[0_16px_40px_-10px_rgba(124,58,237,0.8)] hover:-translate-y-px"
            >
              Start Your Website
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile button */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-ink-200 bg-white/80 backdrop-blur text-ink-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden pb-5 animate-fade-in">
            <div className="rounded-2xl bg-white ring-1 ring-ink-200 p-2 shadow-[0_24px_48px_-16px_rgba(15,23,42,0.25)]">
              {nav.map((item) => {
                const active =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname?.startsWith(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                      active
                        ? 'bg-ink-900 text-white'
                        : 'text-ink-700 hover:bg-ink-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link
                href="/#contact"
                className="mt-1 block rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Start Your Website →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
