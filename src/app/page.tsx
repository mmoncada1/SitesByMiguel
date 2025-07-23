import Link from 'next/link'
import { ArrowRight, Code, Palette, Zap } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Modern Web Solutions by{' '}
              <span className="gradient-text">SitesByMiguel</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Creating stunning, responsive websites and web applications that drive results. 
              From concept to deployment, we bring your digital vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/portfolio" 
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SitesByMiguel?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with creative design to deliver exceptional web experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gray-50 card-hover">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Clean Code</h3>
              <p className="text-gray-600">
                We write clean, maintainable code following industry best practices and modern standards.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gray-50 card-hover">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Beautiful Design</h3>
              <p className="text-gray-600">
                Every project features modern, responsive design that looks great on all devices.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gray-50 card-hover">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fast Performance</h3>
              <p className="text-gray-600">
                Optimized for speed and performance to ensure the best user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600">
              Check out some of our recent projects
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    OneBowla2.com
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A modern, responsive website featuring clean design and smooth user experience. 
                    Built with the latest web technologies for optimal performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                      Tailwind CSS
                    </span>
                  </div>
                  <a 
                    href="https://onebowla2.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Visit Site
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-600">OB2</span>
                    </div>
                    <p className="text-primary-700 font-semibold">OneBowla2.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/portfolio" 
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. Get in touch and let's discuss your vision.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
          >
            Get In Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
