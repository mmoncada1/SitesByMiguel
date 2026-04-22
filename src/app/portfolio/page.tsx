'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  X,
  Code,
  Users,
  Calendar,
  Sparkles,
} from 'lucide-react'

type Project = {
  id: number
  title: string
  description: string
  url: string
  technologies: string[]
  category: string
  details: {
    client: string
    duration: string
    teamSize: string
    challenges: string
    solutions: string
    results: string
    features: string[]
  }
}

const projects: Project[] = [
  {
    id: 6,
    title: 'ChironUMich.com',
    description:
      "Website for Chiron Healthcare Consulting — the first and largest pro-bono undergraduate healthcare consulting organization at the University of Michigan. Showcases their manifesto, values, team, clients, and recruitment pipeline for future healthcare leaders.",
    url: 'https://www.chironumich.com',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SEO'],
    category: 'Student Organization',
    details: {
      client: 'Chiron Healthcare Consulting (University of Michigan)',
      duration: '4 weeks',
      teamSize: 'Solo developer',
      challenges:
        "Designing a professional, trustworthy digital presence for UMich's premier healthcare consulting group — conveying interdisciplinary expertise while driving interest and applications.",
      solutions:
        "Built a refined, editorial-style site highlighting Chiron's four values, team structure, client work, and alumni placements, with a clear path to the interest form.",
      results:
        'A polished public face for Chiron featuring 40+ members, 20+ professional development events, and an interdisciplinary team across 30+ majors.',
      features: [
        'Manifesto & values',
        'Team & board profiles',
        'Client showcase',
        'Alumni placements',
        'Interest form integration',
        'Mobile responsive',
        'SEO optimized',
      ],
    },
  },
  {
    id: 1,
    title: 'MichiganStocksAndBonds.com',
    description:
      "Professional website for MSBO, a highly selective undergraduate investment organization at the University of Michigan. Recruitment, team, placements, and application flow in one polished platform.",
    url: 'https://michiganstocksandbonds.com',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SEO'],
    category: 'Student Organization',
    details: {
      client: 'Michigan Stocks and Bonds (MSBO)',
      duration: '4 weeks',
      teamSize: 'Solo developer',
      challenges:
        "Creating a professional, engaging website that attracts top talent while showcasing the organization's expertise and placement record.",
      solutions:
        "Modern, recruitment-focused design highlighting four pillars, sector desks, and clear application pathways.",
      results:
        "Established a strong digital presence for UMich's leading investment club with a professional recruitment platform.",
      features: [
        'Recruitment information',
        'Team profiles',
        'Placement statistics',
        'Application portal',
        'Mobile responsive',
        'SEO optimized',
      ],
    },
  },
  {
    id: 2,
    title: 'OneBowlA2.com',
    description:
      'Modern restaurant site for One Bowl Asian Cuisine in Ann Arbor — authentic pho, ramen, Korean and Chinese dishes with online ordering and delivery integration.',
    url: 'https://onebowla2.com',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'Node.js'],
    category: 'Restaurant',
    details: {
      client: 'One Bowl Asian Cuisine',
      duration: '3 weeks',
      teamSize: 'Solo developer',
      challenges:
        'A comprehensive restaurant site with online ordering, menu management, and a seamless customer experience.',
      solutions:
        'Responsive design with third-party delivery integration, mobile-optimized menu flow, and clear navigation.',
      results:
        'A professional online presence and streamlined ordering for a family-owned restaurant.',
      features: [
        'Online menu',
        'Delivery integration',
        'Mobile responsive',
        'Location & hours',
        'Contact',
        'SEO optimized',
      ],
    },
  },
  {
    id: 3,
    title: 'MoonDAO.com',
    description:
      "The Internet's space program — a DAO that has raised $8M+ and sent 2 people to space. Governance, project funding, and the Space Acceleration Network.",
    url: 'https://moondao.com',
    technologies: ['Next.js', 'React', 'Web3', 'Ethereum', 'DAO'],
    category: 'DAO Platform',
    details: {
      client: 'MoonDAO Community',
      duration: '8 weeks',
      teamSize: 'Contributor (team of 4)',
      challenges:
        'Complex governance systems, multi-chain integration, and intuitive Web3 UX.',
      solutions:
        'Multi-sig governance, streamlined wallet flows, and comprehensive funding workflows.',
      results:
        '$8M+ raised, 2 people sent to space, 80+ projects funded through the platform.',
      features: [
        'DAO governance',
        'Multi-sig wallets',
        'Project funding',
        'Token economics',
        'Mission tracking',
      ],
    },
  },
  {
    id: 4,
    title: 'SkillMapAI.org',
    description:
      'An AI-powered platform that generates personalized learning roadmaps for any skill — from frontend dev to data science — with curated resources and experience-level guidance.',
    url: 'https://skillmapai.org',
    technologies: ['Next.js', 'React', 'AI/ML', 'Python', 'PostgreSQL'],
    category: 'AI Platform',
    details: {
      client: 'SkillMapAI',
      duration: '4 weeks',
      teamSize: 'Solo developer',
      challenges:
        'Building intelligent, personalized learning paths across many domains and experience levels.',
      solutions:
        'AI recommendation engine, intuitive skill input, and curated learning templates.',
      results:
        'The platform now generates personalized roadmaps across a wide range of skills.',
      features: [
        'AI learning paths',
        'Skill input',
        'Experience levels',
        'Curated resources',
        'Popular tracks',
      ],
    },
  },
  {
    id: 5,
    title: 'MarinaPickle.com',
    description:
      'A blockchain-powered crowdfunding platform for the Marina Pickleball Community — transparent fund allocation and smart contracts for local community initiatives.',
    url: 'https://marinapickle.com',
    technologies: ['Next.js', 'React', 'Ethereum', 'Web3', 'Blockchain'],
    category: 'Community Platform',
    details: {
      client: 'Marina Pickleball Community',
      duration: '2 weeks',
      teamSize: 'Collaboration (Sean O’Brien, Pablo Moncada)',
      challenges:
        'Transparent blockchain-based crowdfunding with clean UX and clear fund allocation.',
      solutions:
        'Ethereum smart contracts, clear allocation breakdown, and a friendly Web3 interface.',
      results:
        'Launched a community fundraising platform with a clear $1,500 goal for two pro-grade pickleball nets.',
      features: [
        'On-chain donations',
        'Transparent allocation',
        'Smart contracts',
        'Wallet connectivity',
        'Goal tracking',
      ],
    },
  },
]

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null)

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
              Selected work
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tightest text-ink-900 sm:text-6xl md:text-7xl">
              A portfolio of{' '}
              <span className="gradient-text">shipped work.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-600 sm:text-xl">
              Real projects, real clients, and real results — from student orgs
              and restaurants to DAOs and AI platforms.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="card group overflow-hidden p-0"
              >
                {/* Preview */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-ink-100 to-ink-50">
                  <iframe
                    src={project.url}
                    className="absolute inset-0 border-0"
                    title={`Preview of ${project.title}`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    style={{
                      transform: 'scale(0.6)',
                      transformOrigin: 'top left',
                      width: '166.67%',
                      height: '166.67%',
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute left-4 top-4">
                    <span className="chip">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Live
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Visit site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => setSelected(project)}
                      className="btn-ghost"
                    >
                      Case study
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
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
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-300">
            Let&apos;s create something that stands out — and performs.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition hover:-translate-y-px hover:shadow-[0_16px_40px_-10px_rgba(255,255,255,0.35)]"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/70 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl ring-1 ring-ink-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
                    {selected.category}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ink-900">
                    {selected.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-50 text-ink-700 ring-1 ring-ink-200 transition hover:bg-ink-100"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                    Overview
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                    {selected.description}
                  </p>
                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-ink-700">
                      <Users className="h-4 w-4 text-primary-600" />
                      Client: <strong>{selected.details.client}</strong>
                    </div>
                    <div className="flex items-center gap-3 text-ink-700">
                      <Calendar className="h-4 w-4 text-primary-600" />
                      Duration: <strong>{selected.details.duration}</strong>
                    </div>
                    <div className="flex items-center gap-3 text-ink-700">
                      <Code className="h-4 w-4 text-primary-600" />
                      Team: <strong>{selected.details.teamSize}</strong>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                    Live preview
                  </h3>
                  <div className="mt-3 h-64 overflow-hidden rounded-2xl ring-1 ring-ink-200">
                    <iframe
                      src={selected.url}
                      className="w-full h-full border-0"
                      style={{
                        transform: 'scale(0.72)',
                        transformOrigin: 'top left',
                        width: '138.9%',
                        height: '138.9%',
                      }}
                      loading="lazy"
                      title={`Preview of ${selected.title}`}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Technologies
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.technologies.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                    Challenge
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                    {selected.details.challenges}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                    Solution
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                    {selected.details.solutions}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Features
                </h3>
                <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-ink-700 sm:grid-cols-2">
                  {selected.details.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary-500 to-accent-600" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
                  Results
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                  {selected.details.results}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  Visit live site
                  <ExternalLink className="h-4 w-4" />
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="btn-ghost"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
