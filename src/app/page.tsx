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
  Users,
  FileText,
  Calendar,
  Building2,
  HeartHandshake,
  BookOpen,
  Smartphone,
  Gauge,
  Wrench,
  GraduationCap,
  Quote,
} from 'lucide-react'

// ---- Featured case study (MSBO) ----
const featured = {
  title: 'MichiganStocksAndBonds.com',
  tagline: 'Featured student organization website',
  description:
    "A refined, recruitment-focused platform for MSBO — University of Michigan's premier undergraduate investment organization. The site showcases their team structure, placements, and full application flow in one polished experience.",
  url: 'https://michiganstocksandbonds.com',
  tags: [
    'Student Organization',
    'Finance',
    'Recruitment',
    'University of Michigan',
  ],
  stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
}

const stats = [
  { value: '5+', label: 'Live Projects' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '2–6w', label: 'Avg. Turnaround' },
  { value: '24h', label: 'Response Time' },
]

// ---- Student org feature cards ----
const studentOrgFeatures = [
  {
    icon: Users,
    title: 'Recruitment pages',
    body: 'Tell prospective members what your org is about and why they should join.',
  },
  {
    icon: FileText,
    title: 'Application forms',
    body: 'Collect applications and interest signups directly on your site, no extra tools needed.',
  },
  {
    icon: Calendar,
    title: 'Event information',
    body: 'Share upcoming events, info sessions, and deadlines in a place people actually look.',
  },
  {
    icon: Building2,
    title: 'Team and board pages',
    body: 'Introduce your leadership and members with polished bios and photos.',
  },
  {
    icon: HeartHandshake,
    title: 'Sponsor and client-facing pages',
    body: 'Build credibility with sponsors, clients, and partners who need to take you seriously.',
  },
  {
    icon: BookOpen,
    title: 'Resource hubs',
    body: 'Centralize documents, guides, alumni resources, and internal links in one clean place.',
  },
]

// ---- Trust signals ----
const trustSignals = [
  {
    icon: Smartphone,
    title: 'Responsive on every device',
    body: 'Polished layouts for desktop, tablet, and mobile out of the box.',
  },
  {
    icon: Zap,
    title: 'Fast turnaround',
    body: 'Most projects ship in 2–6 weeks depending on scope.',
  },
  {
    icon: Palette,
    title: 'Clean, modern design',
    body: 'Editorial-quality visuals that look professional, not generic.',
  },
  {
    icon: Wrench,
    title: 'Easy to update',
    body: 'A clear structure your team can edit and grow over time.',
  },
  {
    icon: Code2,
    title: 'Built with modern tools',
    body: 'Next.js, React, TypeScript, and Tailwind — production-grade by default.',
  },
  {
    icon: GraduationCap,
    title: 'Student org experience',
    body: 'Real experience working with student organizations and local brands.',
  },
]

// ---- Packages ----
const packages = [
  {
    name: 'Starter Site',
    blurb:
      'Best for student orgs, personal brands, and simple landing pages.',
    features: [
      '1–3 pages',
      'Mobile-friendly design',
      'Contact or interest form',
      'Basic SEO setup',
      'One round of revisions',
    ],
    highlight: false,
  },
  {
    name: 'Professional Site',
    blurb:
      'Best for established organizations, nonprofits, and small businesses.',
    features: [
      '4–7 pages',
      'Custom design',
      'Forms for applications or inquiries',
      'Analytics setup',
      'SEO and performance optimization',
      'Two rounds of revisions',
    ],
    highlight: true,
  },
  {
    name: 'Premium Site + Support',
    blurb:
      'Best for organizations that want a larger site or ongoing help.',
    features: [
      'Custom page structure',
      'Advanced forms or integrations',
      'Case studies, blogs, or resource pages',
      'Ongoing edits and maintenance',
      'Priority support',
    ],
    highlight: false,
  },
]

// ---- Testimonials ----
// Set `showTestimonials = false` to hide the section entirely until a real
// testimonial is ready. The placeholder below is marked clearly as such.
const showTestimonials = true
const testimonials: {
  quote: string
  author: string
  role?: string
  placeholder?: boolean
}[] = [
  {
    quote:
      'Miguel built MSBO a website that finally matches the caliber of our org. Recruitment got smoother, applicants take us more seriously, and the whole site just feels sharp.',
    author: 'Michigan Stocks and Bonds (MSBO)',
    role: 'University of Michigan',
  },
]

const projectTypes = [
  'Student organization',
  'Small business',
  'Nonprofit',
  'Personal brand',
  'Other',
]

const timelines = [
  'ASAP (under 2 weeks)',
  '2–4 weeks',
  '1–2 months',
  'Flexible / not sure yet',
]

const budgets = [
  'Under $500',
  '$500–$1,500',
  '$1,500–$3,500',
  '$3,500+',
  'Not sure yet',
]

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: '',
    needs: '',
    timeline: '',
    budget: '',
    existingSite: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const subject = `New website inquiry — ${
      formData.organization || formData.name
    }`
    const message = [
      `Organization: ${formData.organization || '—'}`,
      `Project type: ${formData.projectType || '—'}`,
      `Timeline: ${formData.timeline || '—'}`,
      `Budget: ${formData.budget || '—'}`,
      `Existing site / social: ${formData.existingSite || '—'}`,
      '',
      'What they need help with:',
      formData.needs || '—',
    ].join('\n')

    try {
      await emailjs.send(
        'service_al1be1b',
        'template_ipyi5y3',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject,
          message,
        },
        'Vb9t-GfEjGql1_4_S'
      )
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        organization: '',
        projectType: '',
        needs: '',
        timeline: '',
        budget: '',
        existingSite: '',
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5 text-primary-600" />
              Web design for student orgs &amp; small businesses
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tightest text-ink-900 sm:text-6xl md:text-7xl lg:text-[80px] lg:leading-[0.95]">
              Modern websites for student orgs and{' '}
              <span className="gradient-text">growing brands.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-600 sm:text-xl">
              Clean, responsive sites that help you recruit members, share
              events, and attract clients.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="#contact" className="btn-accent">
                Start Your Website
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#work" className="btn-ghost">
                View Recent Work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-14 flex flex-col items-center gap-3">
              <div className="flex items-center gap-1 text-amber-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-ink-500">
                Trusted by student orgs, restaurants, DAOs &amp; founders.
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

      {/* ============ FEATURED WORK (Chiron) ============ */}
      <section id="work" className="relative overflow-hidden bg-ink-950 text-white scroll-mt-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50 mask-fade-b" />
        <div className="pointer-events-none absolute -top-32 left-1/4 h-[400px] w-[600px] rounded-full bg-gradient-to-br from-primary-600/40 to-transparent blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 section">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-300">
                {featured.tagline}
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
                  <h3 className="mt-6 break-words text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-[32px] md:leading-tight">
                    {featured.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-relaxed text-ink-300">
                    {featured.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.tags.map((t) => (
                      <span key={t} className="chip-dark">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-900 transition hover:-translate-y-px hover:shadow-[0_12px_32px_-10px_rgba(255,255,255,0.4)]"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10"
                  >
                    View all work
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

      {/* ============ STUDENT ORGANIZATIONS ============ */}
      <section id="student-orgs" className="section bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">For student orgs</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Websites for student organizations
            </h2>
            <p className="mt-5 text-lg text-ink-600">
              Student organizations need more than an Instagram page. A
              professional website gives your group one place to share your
              mission, team, applications, events, resources, sponsors, and
              contact information.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studentOrgFeatures.map((f) => (
              <div key={f.title} className="card group p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-[0_10px_24px_-10px_rgba(124,58,237,0.6)] transition-transform duration-300 group-hover:scale-105">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">
                  {f.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="#contact" className="btn-accent">
              Start Your Website
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PACKAGES ============ */}
      <section id="packages" className="section bg-ink-50 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Packages</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Simple website packages
            </h2>
            <p className="mt-5 text-lg text-ink-600">
              Pick the option that fits where you are today. Every project is
              built around your goals, not a template.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`relative card p-8 flex flex-col ${
                  p.highlight
                    ? 'ring-2 ring-primary-500 shadow-[0_24px_48px_-24px_rgba(124,58,237,0.35)]'
                    : ''
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 right-6 chip bg-gradient-to-r from-primary-600 to-accent-600 text-white ring-0">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-semibold tracking-tight text-ink-900">
                  {p.name}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">
                  {p.blurb}
                </p>

                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[14.5px] text-ink-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-primary-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <div className="pt-6 border-t border-ink-200/70">
                    <Link
                      href="#contact"
                      className={
                        p.highlight ? 'btn-accent w-full' : 'btn-primary w-full'
                      }
                    >
                      Request a Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-ink-500">
            Ongoing updates and maintenance are available starting at{' '}
            <span className="font-semibold text-ink-700">$50/month</span>.
          </p>
        </div>
      </section>

      {/* ============ TRUST SIGNALS ============ */}
      <section id="trust" className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Why work with me</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Built for fast-moving organizations
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustSignals.map((t) => (
              <div key={t.title} className="card p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink-900">
                  {t.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      {showTestimonials && testimonials.length > 0 && (
        <section id="testimonials" className="section bg-ink-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Kind words</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
                What clients say
              </h2>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-1">
              {testimonials.map((t, i) => (
                <figure key={i} className="card p-8 sm:p-10">
                  <Quote className="h-6 w-6 text-primary-500" aria-hidden="true" />
                  <blockquote className="mt-4 text-lg leading-relaxed text-ink-800">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-sm font-semibold text-white">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-900">
                        {t.author}
                      </p>
                      {t.role && (
                        <p className="text-xs text-ink-500">{t.role}</p>
                      )}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ CONTACT / INQUIRY FORM ============ */}
      <section id="contact" className="section bg-white scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Left: info */}
              <div>
                <span className="eyebrow">Start your website</span>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
                  Tell me about your project.
                </h2>
                <p className="mt-5 text-lg text-ink-600">
                  Share a bit about your organization and what you&apos;re
                  trying to build. I&apos;ll get back to you to talk through
                  your project.
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
                  <h3 className="text-lg font-semibold">Why work with me?</h3>
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
                  Project inquiry
                </h3>
                <p className="mt-2 text-sm text-ink-500">
                  The more you share, the faster I can give you a useful
                  response.
                </p>

                {submitStatus === 'success' && (
                  <div
                    role="status"
                    className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
                    Thanks for reaching out. I&apos;ll get back to you soon to
                    talk through your project.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div
                    role="alert"
                    className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                  >
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
                        placeholder="Your full name"
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

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col">
                      <label
                        htmlFor="organization"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500"
                      >
                        Organization
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="input-modern mt-auto"
                        placeholder="Your org or company"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="projectType"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500"
                      >
                        Type of project
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="input-modern mt-auto"
                      >
                        <option value="">Select one…</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="needs"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500"
                    >
                      What do you need help with?
                    </label>
                    <textarea
                      id="needs"
                      name="needs"
                      required
                      rows={5}
                      value={formData.needs}
                      onChange={handleChange}
                      className="input-modern resize-none"
                      placeholder="A new website, a redesign, recruitment pages, an application form, event pages, etc."
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="timeline"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500"
                      >
                        Desired timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="input-modern"
                      >
                        <option value="">Select a timeline…</option>
                        {timelines.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500"
                      >
                        Budget range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="input-modern"
                      >
                        <option value="">Select a range…</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="existingSite"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-500"
                    >
                      Website or social link (if you have one)
                    </label>
                    <input
                      id="existingSite"
                      name="existingSite"
                      value={formData.existingSite}
                      onChange={handleChange}
                      className="input-modern"
                      placeholder="https://instagram.com/your-org or yoursite.com"
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
                        Start My Website
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
