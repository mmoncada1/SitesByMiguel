'use client'
import Link from 'next/link'
import { ArrowRight, ExternalLink, X, Code, Globe, Users, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const projects = [
    {
      id: 1,
      title: "OneBowlA2.com",
      description: "Modern restaurant website featuring online ordering, catering services, and delivery integration. Built for One Bowl Asian Cuisine, located in Ann Arbor, Michigan, serving authentic Asian dishes including pho, ramen, Korean and Chinese cuisine with fresh ingredients and traditional recipes.",
      image: "/projects/onebowla2.jpg",
      url: "https://onebowla2.com",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "Node.js"],
      category: "Restaurant Website",
      details: {
        client: "One Bowl Asian Cuisine",
        duration: "3 weeks",
        teamSize: "Solo developer (Miguel Moncada)",
        challenges: "Creating a comprehensive restaurant website with online ordering integration, menu management, and seamless customer experience for authentic Asian cuisine",
        solutions: "Built responsive design with integrated online ordering through third-party delivery services, optimized for mobile users, and implemented clear navigation for diverse menu categories",
        results: "Professional online presence for family-owned restaurant, streamlined ordering process, mobile-optimized experience for customers",
        features: ["Online Menu Display", "Third-party Delivery Integration", "Mobile Responsive Design", "Contact Information", "Location & Hours", "SEO Optimized"]
      }
    },
    {
      id: 2,
      title: "MoonDAO.com",
      description: "The Internet's space program - a decentralized autonomous organization that has raised $8M+ and sent 2 people to space. Features governance systems, project funding, and the Space Acceleration Network. Building humanity's multiplanetary future through blockchain technology and community governance.",
      image: "/projects/moondao.jpg",
      url: "https://moondao.com",
      technologies: ["React", "Next.js", "Web3", "DAO", "Ethereum", "Governance"],
      category: "DAO Platform",
      details: {
        client: "MoonDAO Community",
        duration: "8 weeks",
        teamSize: "Contributed as part of 4-person team",
        challenges: "Building complex governance systems, integrating multiple blockchain networks, and creating intuitive UX for Web3 interactions",
        solutions: "Implemented multi-sig governance contracts, streamlined Web3 wallet connections, and created comprehensive project funding workflows",
        results: "$8M+ raised, 2 people sent to space, 80+ projects funded through the platform",
        features: ["DAO Governance", "Multi-sig Wallets", "Project Funding", "Token Economics", "Space Mission Tracking"]
      }
    },
    {
      id: 3,
      title: "SkillMapAI.org",
      description: "An AI-powered platform that creates personalized learning roadmaps for any skill or topic. Users can enter their learning goals and experience level to receive curated learning paths with resources, featuring popular tracks in frontend development, data science, digital marketing, and more.",
      image: "/projects/skillmapai.jpg",
      url: "https://skillmapai.org",
      technologies: ["React", "Next.js", "AI/ML", "Python", "PostgreSQL"],
      category: "AI Platform",
      details: {
        client: "SkillMapAI",
        duration: "4 weeks",
        teamSize: "Solo developer (Miguel Moncada)",
        challenges: "Building an intelligent system that can generate personalized learning paths for any skill, integrating AI recommendations with user experience levels and curating quality learning resources",
        solutions: "Developed AI-powered recommendation engine, created intuitive interface for skill input and experience selection, and implemented popular learning path templates",
        results: "Platform successfully generates personalized learning roadmaps for diverse skills, streamlined learning path discovery for users",
        features: ["AI Learning Path Generation", "Skill Input Interface", "Experience Level Selection", "Popular Learning Tracks", "Resource Curation", "Personalized Recommendations"]
      }
    },
    {
      id: 4,
      title: "MarinaPickle.com",
      description: "A blockchain-powered crowdfunding platform for the Marina Pickleball Community Fund, created to raise $1,500 for two professional-grade pickleball nets at Moscone Park in San Francisco. Features transparent fund allocation and smart contract technology for community fundraising.",
      image: "/projects/marinapickle.jpg",
      url: "https://marinapickle.com",
      technologies: ["React", "Next.js", "Blockchain", "Ethereum", "Web3"],
      category: "Community Platform",
      details: {
        client: "Marina Pickleball Community",
        duration: "2 weeks",
        teamSize: "Collaborated with Sean O'Brien, Pablo Moncada",
        challenges: "Building a transparent blockchain-based crowdfunding platform with clear fund allocation, wallet integration, and community-focused design for a local pickleball initiative",
        solutions: "Implemented Ethereum-based smart contracts for transparent fundraising, created clear fund allocation breakdown ($1,000 equipment, $400 maintenance, $100 buffer), and built user-friendly Web3 interface",
        results: "Successfully launched community fundraising platform with transparent blockchain technology, clear goal of $1,500 for two nets to increase game throughput by 50%",
        features: ["Blockchain Donations", "Transparent Fund Allocation", "Smart Contract Integration", "Wallet Connectivity", "Community Focus", "Clear Goal Tracking"]
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              My <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore my recent projects and see how I bring digital visions to life. 
              Each project represents my commitment to quality, innovation, and client success.
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
                  {project.url !== "#" && (project.id === 1 || project.id === 2 || project.id === 3 || project.id === 4) ? (
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
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
                    >
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
                Featured Project: OneBowlA2.com
              </h2>
              <p className="text-xl text-gray-600">
                Restaurant website driving customer engagement for authentic Asian cuisine in Ann Arbor
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-96">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Restaurant Digital Experience
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      OneBowlA2.com serves as the digital gateway for One Bowl Asian Cuisine, 
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
                      Visit OneBowlA2.com
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="relative overflow-hidden">
                  <iframe
                    src="https://onebowla2.com"
                    className="w-full h-full border-0 absolute top-0 left-0"
                    title="Preview of OneBowlA2.com"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    style={{ 
                      transform: 'scale(0.8)', 
                      transformOrigin: 'top left',
                      width: '125%',
                      height: '125%'
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 z-10"></div>
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2">
                    <p className="text-white font-semibold text-sm">OneBowlA2.com</p>
                    <p className="text-white/80 text-xs">Live Production Site</p>
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

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-primary-600 font-semibold">
                    {selectedProject.category}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>

              {/* Project Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h3>
                  <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary-600 mr-3" />
                      <span className="text-gray-600">Client: <strong>{selectedProject.details.client}</strong></span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary-600 mr-3" />
                      <span className="text-gray-600">Duration: <strong>{selectedProject.details.duration}</strong></span>
                    </div>
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-primary-600 mr-3" />
                      <span className="text-gray-600">Team: <strong>{selectedProject.details.teamSize}</strong></span>
                    </div>
                  </div>
                </div>

                <div>
                  {/* Live Preview */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Preview</h3>
                  <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
                    <iframe 
                      src={selectedProject.url}
                      className="w-full h-full transform scale-75 origin-top-left"
                      style={{ width: '133.33%', height: '133.33%' }}
                      loading="lazy"
                      title={`Preview of ${selectedProject.title}`}
                    />
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech: string) => (
                    <span 
                      key={tech}
                      className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.details.features.map((feature: string) => (
                    <div key={feature} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenges</h3>
                  <p className="text-gray-600">{selectedProject.details.challenges}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Solutions</h3>
                  <p className="text-gray-600">{selectedProject.details.solutions}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Results & Impact</h3>
                <p className="text-gray-600">{selectedProject.details.results}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t">
                <a 
                  href={selectedProject.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center"
                >
                  <Globe className="mr-2 h-5 w-5" />
                  Visit Live Site
                </a>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
