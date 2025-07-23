import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "OneBowla2.com",
      description: "A modern, responsive website featuring clean design and smooth user experience. Built with the latest web technologies for optimal performance and user engagement.",
      image: "/projects/onebowla2.jpg",
      url: "https://onebowla2.com",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      category: "Web Application"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce solution with shopping cart, payment integration, and admin dashboard. Optimized for conversions and user experience.",
      image: "/projects/ecommerce.jpg",
      url: "#",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      category: "E-commerce"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A stunning portfolio website for a creative agency, featuring smooth animations, responsive design, and optimized performance.",
      image: "/projects/portfolio.jpg",
      url: "#",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      category: "Portfolio"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our recent projects and see how we bring digital visions to life. 
              Each project represents our commitment to quality, innovation, and client success.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                {/* Project Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-primary-600">
                        {project.title.split(/[.\s]/)[0].substring(0, 3).toUpperCase()}
                      </span>
                    </div>
                    <p className="text-primary-700 font-semibold">{project.category}</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {project.url !== "#" && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center"
                      >
                        Visit Site
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    )}
                    <button className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Highlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Project: OneBowla2.com
              </h2>
              <p className="text-xl text-gray-600">
                Our latest showcase demonstrating modern web development excellence
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Modern Web Experience
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      OneBowla2.com represents the pinnacle of modern web development, 
                      featuring a responsive design that adapts seamlessly across all devices.
                    </p>
                    <p>
                      Built with performance in mind, the site loads quickly and provides 
                      an intuitive user experience that keeps visitors engaged.
                    </p>
                    <p>
                      The clean, professional design reflects the brand's values while 
                      incorporating subtle animations and interactions that delight users.
                    </p>
                  </div>
                  <div className="mt-8">
                    <a 
                      href="https://onebowla2.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center"
                    >
                      Visit OneBowla2.com
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white rounded-xl shadow-xl p-8 inline-block">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-white">OB2</span>
                    </div>
                    <p className="text-primary-700 font-semibold text-lg">OneBowla2.com</p>
                    <p className="text-gray-500 text-sm">Live Production Site</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a digital solution that exceeds your expectations.
          </p>
          <Link 
            href="/contact" 
            className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
