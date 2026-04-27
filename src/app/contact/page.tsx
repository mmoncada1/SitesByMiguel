'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react'

const faqs = [
  {
    q: "What's your typical project timeline?",
    a: 'Most projects ship within 2–6 weeks depending on scope and complexity.',
  },
  {
    q: 'Do you provide ongoing maintenance?',
    a: 'Yes — I offer maintenance packages to keep your site secure, fast, and up to date.',
  },
  {
    q: 'What technologies do you use?',
    a: 'Modern, battle-tested tools: React, Next.js, TypeScript, and Tailwind CSS.',
  },
  {
    q: 'Can you redesign an existing site?',
    a: 'Absolutely — whether it’s a refresh or a full rebuild, I can help.',
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

export default function Contact() {
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
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-light mask-fade-b" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-300/40 via-accent-400/20 to-transparent blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28">
          <div className="mx-auto max-w-4xl text-center animate-fade-up">
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5 text-primary-600" />
              Get in touch
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tightest text-ink-900 sm:text-6xl md:text-7xl">
              Let&apos;s make something{' '}
              <span className="gradient-text">great.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-600 sm:text-xl">
              Tell me about your project — I usually reply within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-5">
            {/* Left info */}
            <div className="lg:col-span-2 space-y-4">
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
                <a
                  key={item.label}
                  href={item.href}
                  className="card flex items-center gap-4 p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                      {item.label}
                    </p>
                    <p className="text-[15px] font-semibold text-ink-900">
                      {item.value}
                    </p>
                  </div>
                  {item.href && (
                    <ArrowUpRight className="ml-auto h-4 w-4 text-ink-400" />
                  )}
                </a>
              ))}

              <div className="card p-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Response time
                </h4>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                  I respond to inquiries within{' '}
                  <span className="font-semibold text-ink-900">24 hours</span>.
                  For urgent work, mention it in your message and I&apos;ll
                  prioritize.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 p-6 text-white">
                <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <h4 className="text-lg font-semibold">What happens next?</h4>
                <ol className="mt-4 space-y-2 text-sm">
                  {[
                    'I review your message',
                    'We schedule a quick call',
                    'You get a proposal',
                  ].map((s, i) => (
                    <li key={s} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/20 text-xs font-semibold">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-8 sm:p-10">
                <h2 className="text-3xl font-semibold tracking-tight text-ink-900">
                  Project inquiry
                </h2>
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
                      placeholder="https://instagram.com/yourorg or yoursite.com"
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

      {/* FAQ */}
      <section className="section bg-ink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Frequently asked.
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="text-lg font-semibold tracking-tight text-ink-900">
                  {f.q}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
