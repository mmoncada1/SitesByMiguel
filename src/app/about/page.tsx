import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Users,
  Clock,
  Code2,
  Layers,
  ShoppingBag,
  LifeBuoy,
  Sparkles,
} from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Quality first',
    body:
      'Every line of code and every design detail is crafted with care and precision.',
  },
  {
    icon: Users,
    title: 'Client-focused',
    body:
      'I work closely with you to understand your goals and deliver beyond expectations.',
  },
  {
    icon: Clock,
    title: 'Timely delivery',
    body:
      'Clear processes and honest timelines — projects ship when promised.',
  },
]

const services = [
  {
    icon: Code2,
    title: 'Web development',
    body:
      'Custom websites and web applications built with modern tooling like Next.js and TypeScript.',
    bullets: [
      'Responsive design',
      'Performance optimization',
      'SEO & accessibility',
      'Cross-browser support',
    ],
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    body:
      'Full-featured stores with secure payments, inventory, and polished admin experiences.',
    bullets: [
      'Payment integration',
      'Inventory management',
      'Order processing',
      'Customer accounts',
    ],
  },
  {
    icon: Layers,
    title: 'UI/UX design',
    body:
      'Elegant, usable interfaces that turn visitors into customers across every device.',
    bullets: [
      'User research',
      'Wireframing & prototyping',
      'Visual design systems',
      'Usability testing',
    ],
  },
  {
    icon: LifeBuoy,
    title: 'Maintenance & support',
    body:
      'Ongoing updates and monitoring to keep your site fast, secure, and healthy.',
    bullets: [
      'Security updates',
      'Performance monitoring',
      'Content updates',
      'Technical support',
    ],
  },
]

const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Web3',
]

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-light mask-fade-b" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-300/40 via-accent-400/20 to-transparent blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-28">
          <div className="mx-auto max-w-4xl text-center animate-fade-up">
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5 text-primary-600" />
              About the studio
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tightest text-ink-900 sm:text-6xl md:text-7xl">
              Small studio. <span className="gradient-text">Big craft.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-600 sm:text-xl">
              I&apos;m passionate about creating web experiences that move people —
              and move businesses forward. Here&apos;s a little about how I work.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <span className="eyebrow">My story</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900">
                Code, design, and a love for shipping.
              </h2>
            </div>
            <div className="lg:col-span-3 space-y-6 text-[17px] leading-relaxed text-ink-600">
              <p>
                Hi, I&apos;m{' '}
                <span className="font-semibold text-ink-900">
                  Miguel Moncada-Larrotiz
                </span>
                , a Computer Science student at the University of Michigan and
                the founder of Sites by Miguel. I build high-performance websites
                and web applications with a focus on clarity, craft, and real
                business outcomes.
              </p>
              <p>
                My journey started with a fascination for how technology can
                transform businesses and connect people. Through my education at
                Michigan and hands-on experience as a Development Intern at
                MoonDAO, I&apos;ve sharpened my skills across React, Next.js,
                TypeScript, Python, and C++.
              </p>
              <p>
                From student organizations like Michigan Stocks and Bonds to
                local restaurants like One Bowl Asian Cuisine, I bring the same
                level of dedication and attention to detail to every project.
                Every business deserves a professional online presence that
                truly represents their brand.
              </p>

              <div className="pt-2">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Tech I work with
                </p>
                <div className="flex flex-wrap gap-2">
                  {stack.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-ink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Values</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              The principles behind the pixels.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Services</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              What I do — end to end.
            </h2>
            <p className="mt-5 text-lg text-ink-600">
              Comprehensive web services tailored to your goals and your brand.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="card p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-ink-900 text-white">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-ink-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
                      {s.body}
                    </p>
                    <ul className="mt-5 grid grid-cols-1 gap-2 text-sm text-ink-700 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary-500 to-accent-600" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 mask-fade-b" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-600/40 to-accent-600/20 blur-3xl" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Ready to work together?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-300">
            Let&apos;s talk through your vision and ship something great.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition hover:-translate-y-px hover:shadow-[0_16px_40px_-10px_rgba(255,255,255,0.35)]"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10"
            >
              See the work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
