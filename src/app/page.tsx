'use client'

import Link from 'next/link'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Palette,
  Zap,
  Send,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle2,
  Star,
  LayoutTemplate,
  Rocket,
  Briefcase,
} from 'lucide-react'

const featured = {
  title: 'MichiganStocksAndBonds.com',
  tagline: 'Student Investment Organization',
  description:
    "The digital home for MSBO — University of Michigan's premier undergraduate investment organization. A refined, recruitment-focused platform showcasing team structure, placements, and application flow.",
  url: 'https://michiganstocksandbonds.com',
  stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
}

const stats = [
  { value: '5+', label: 'Live Projects' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '2–6w', label: 'Avg. Turnaround' },
  { value: '24h', label: 'Response Time' },
]

const features = [
  {
    icon: Code2,
    title: 'Engineered for scale',
    body: 'Production-grade Next.js, TypeScript, and modern tooling. Clean, maintainable, built to grow.',
  },
  {
    icon: Palette,
    title: 'Design that converts',
    body: 'Brand-led visual systems and intuitive UX designed to guide users toward action.',
  },
  {
    icon: Zap,
    title: 'Fast by default',
    body: 'Obsessively optimized for Core Web Vitals, SEO, and delightful performance on every device.',
  },
]

const process = [
  {
    icon: Sparkles,
    step: '01',
    title: 'Discover',
    body: 'We align on goals, audience, and the story your brand needs to tell.',
  },
  {
    icon: LayoutTemplate,
    step: '02',
    title: 'Design',
    body: 'Elegant, on-brand interfaces — refined through iteration and feedback.',
  },
  {
    icon: Briefcase,
    step: '03',
    title: 'Build',
    body: 'Pixel-perfect, accessible, and performant code shipped with care.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch',
    body: 'Deploy, measure, and iterate — I stick around after go-live.',
  },
]

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      await emailjs.send(
        'service_al1be1b',
        'template_ipyi5y3',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'Vb9t-GfEjGql1_4_S'
      )
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-light mask-fade-b" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-300/40 via-accent-400/20 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-pink-300/30 to-accent-400/20 blur-3xl animate-blob" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-28 sm:pb-36">
          <div className="mx-auto max-w-4xl text-center animate-fade-up">
            <h1 className="text-5xl font-semibold tracking-tightest text-ink-900 sm:text-6xl md:text-7xl lg:text-[88px] lg:leading-[0.95]">
              Websites that feel as good as they{' '}
              <span className="gradient-text">perform.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-600 sm:text-xl">
              I&apos;m Miguel — an independent web developer crafting fast, modern,
              and beautifully designed websites for ambitious brands, founders,
              and organizations.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/portfolio" className="btn-accent">
                View my work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-14 flex flex-col items-center gap-3">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-ink-500">
                Trusted by student orgs, restaurants, DAOs & founders.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/70 p-5 text-center ring-1 ring-ink-200/80 backdrop-blur"
              >
                <div className="text-3xl font-semibold tracking-tight text-ink-900">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">What you get</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Crafted with care. Built for results.
            </h2>
            <p className="mt-5 text-lg text-ink-600">
              A hands-on development experience focused on quality, clarity, and
              long-term performance.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="card group p-8"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-[0_10px_24px_-10px_rgba(124,58,237,0.6)] transition-transform duration-300 group-hover:scale-105">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink-900">
                  {f.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED WORK ============ */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50 mask-fade-b" />
        <div className="pointer-events-none absolute -top-32 left-1/4 h-[400px] w-[600px] rounded-full bg-gradient-to-br from-primary-600/40 to-transparent blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 section">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-300">
                Featured work
              </span>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                A recent project I&apos;m proud of.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-200 transition hover:text-white"
            >
              View all work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/[0.03] backdrop-blur">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="chip-dark">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Live
                  </span>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                    {featured.tagline}
                  </p>
                  <h3 className="mt-3 break-words text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-[32px] md:leading-tight">
                    {featured.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-ink-300">
                    {featured.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.stack.map((t) => (
                      <span key={t} className="chip-dark">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-10 flex gap-3">
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-900 transition hover:-translate-y-px hover:shadow-[0_12px_32px_-10px_rgba(255,255,255,0.4)]"
                  >
                    Visit site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10"
                  >
                    Case study
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-3 relative min-h-[360px] border-t border-white/10 lg:border-l lg:border-t-0">
                <div className="absolute inset-0 overflow-hidden">
                  <iframe
                    src={featured.url}
                    className="absolute inset-0 border-0"
                    title={`Preview of ${featured.title}`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    style={{
                      transform: 'scale(0.72)',
                      transformOrigin: 'top left',
                      width: '138.9%',
                      height: '138.9%',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="section bg-ink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Process</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              A simple path from idea to live.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="card p-7">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-ink-400">
                    {p.step}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Left: info */}
              <div>
                <span className="eyebrow">Contact</span>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
                  Let&apos;s build something great.
                </h2>
                <p className="mt-5 text-lg text-ink-600">
                  Have a project in mind or just want to say hello? I usually
                  respond within 24 hours.
                </p>

                <div className="mt-10 space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'mmoncada105@gmail.com',
                      href: 'mailto:mmoncada105@gmail.com',
                    },
                    {
                      icon: Phone,
                      label: 'Phone',
                      value: '(734) 395-0077',
                      href: 'tel:+17343950077',
                    },
                    {
                      icon: MapPin,
                      label: 'Location',
                      value: 'Michigan, USA',
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl bg-ink-50/60 p-4 ring-1 ring-ink-200/60"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary-600 ring-1 ring-ink-200">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-ink-500">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-[15px] font-semibold text-ink-900 hover:text-primary-600"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[15px] font-semibold text-ink-900">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 p-6 text-white">
                  <h4 className="text-lg font-semibold">Why work with me?</h4>
                  <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                    {[
                      'Fast turnaround',
                      'Modern, responsive design',
                      'Ongoing support',
                      'Transparent pricing',
                    ].map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-white/90" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: form */}
              <div className="card p-8 sm:p-10">
                <h3 className="text-2xl font-semibold tracking-tight text-ink-900">
                  Send a message
                </h3>
                <p className="mt-2 text-sm text-ink-500">
                  Tell me a bit about your project.
                </p>

                {submitStatus === 'success' && (
                  <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                    Thanks! Your message was sent. I&apos;ll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    Something went wrong. Please email me directly at
                    mmoncada105@gmail.com.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input-modern"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-modern"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-modern"
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-modern resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-accent w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/50 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
