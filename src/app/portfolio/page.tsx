import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "OneBowla2.com",
      description: "A comprehensive restaurant website for One Bowl Asian Cuisine in Ann Arbor, featuring online ordering integration, detailed menu showcase, location information, and mobile-responsive design. Built to drive customer engagement and streamline the ordering process for authentic Asian cuisine.",
      image: "/projects/onebowla2.jpg",
      url: "https://onebowla2.com",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      category: "Restaurant Website"
    },
    {
      id: 2,
      title: "SkillMapAI.org",
      description: "An innovative AI-powered platform for skill mapping and career development. Features intelligent skill assessment, personalized learning paths, and comprehensive career guidance powered by advanced machine learning algorithms.",
      image: "/projects/skillmapai.jpg",
      url: "https://skillmapai.org",
      technologies: ["React", "Next.js", "AI/ML", "TensorFlow", "Node.js"],
      category: "AI Platform"
    },
    {
      id: 3,
      title: "MarinaPickle.com",
      description: "A community crowdfunding platform for the Marina Pickleball Community Fund, featuring blockchain-powered donations, transparent fund allocation, and real-time progress tracking. Built to raise $1,500 for professional pickleball nets at Moscone Park in San Francisco.",
      image: "/projects/marinapickle.jpg",
      url: "https://marinapickle.com",
      technologies: ["React", "Next.js", "Blockchain", "Ethereum", "Web3"],
      category: "Community Platform"
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
                {/* Project Preview */}
                <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center relative">
                  {project.url !== "#" && (project.id === 1 || project.id === 2 || project.id === 3) ? (
                    // Live iframe preview for all live projects
                    <div className="w-full h-full relative">
                      <iframe
                        src={project.url}
                        className="w-full h-full border-0 rounded-t-xl"
                        title={`Preview of ${project.title}`}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                        style={{ 
                          transform: 'scale(0.6)', 
                          transformOrigin: 'top left',
                          width: '166.67%',
                          height: '166.67%'
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-t-xl"></div>
                    </div>
                  ) : (
                    // Fallback icon for other projects
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-lg font-bold text-primary-600">
                          {project.title.split(/[.\s]/)[0].substring(0, 3).toUpperCase()}
                        </span>
                      </div>
                      <p className="text-primary-700 font-semibold">{project.category}</p>
                    </div>
                  )}
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
                Restaurant website driving customer engagement for authentic Asian cuisine in Ann Arbor
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Restaurant Digital Experience
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      OneBowla2.com serves as the digital gateway for One Bowl Asian Cuisine, 
                      showcasing their authentic Vietnamese pho, Korean dishes, and traditional Asian flavors.
                    </p>
                    <p>
                      The website features seamless online ordering integration with DoorDash, 
                      comprehensive menu displays with pricing, and easy-to-find location and hours information 
                      for the Ann Arbor restaurant.
                    </p>
                    <p>
                      Designed with mobile-first principles to capture the on-the-go dining market, 
                      the site converts visitors into customers through clear call-to-actions and 
                      appetizing visual design that reflects the restaurant's authentic atmosphere.
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
