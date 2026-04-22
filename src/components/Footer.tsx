import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-200">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60 mask-fade-b" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-600/40 via-accent-600/20 to-transparent blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* CTA Row */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-300">
              Let&apos;s build
            </p>
            <h3 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Got an idea?{' '}
              <span className="gradient-text-soft">Let&apos;s ship it.</span>
            </h3>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 transition-all duration-300 hover:-translate-y-px hover:shadow-[0_16px_40px_-10px_rgba(255,255,255,0.35)]"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 pt-14 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white text-ink-900">
                <span className="text-sm font-bold">M</span>
                <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 ring-2 ring-ink-950" />
              </div>
              <span className="text-base font-semibold tracking-tight text-white">
                Sites by Miguel
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-400">
              An independent web studio crafting fast, modern, and beautifully
              designed websites for ambitious brands, founders, and organizations.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="mailto:mmoncada105@gmail.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-ink-200 transition hover:bg-white/10 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/mmoncada1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-ink-200 transition hover:bg-white/10 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-ink-200 transition hover:bg-white/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/portfolio', label: 'Work' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-ink-300 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-center gap-3 text-ink-300">
                <Mail className="h-4 w-4 text-primary-400" />
                <a href="mailto:mmoncada105@gmail.com" className="hover:text-white">
                  mmoncada105@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-ink-300">
                <Phone className="h-4 w-4 text-primary-400" />
                <a href="tel:+17343950077" className="hover:text-white">
                  (734) 395-0077
                </a>
              </li>
              <li className="flex items-center gap-3 text-ink-300">
                <MapPin className="h-4 w-4 text-primary-400" />
                Michigan, USA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-ink-500 md:flex-row md:items-center">
          <p>© {year} Sites by Miguel. All rights reserved.</p>
          <p>Designed & built in Michigan — Next.js · TypeScript · Tailwind.</p>
        </div>
      </div>
    </footer>
  )
}
