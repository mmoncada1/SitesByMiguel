import Link from 'next/link'
import { ArrowRight, Award, Users, Clock } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">SitesByMiguel</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I'm passionate about creating exceptional web experiences that drive results. 
              My mission is to help businesses succeed online through innovative design and development.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                Hi, I'm Miguel Moncada-Larrotiz, the founder of SitesByMiguel. I started this venture 
                with a simple yet powerful vision: to create beautiful, functional websites that help 
                businesses thrive in the digital age. What started as a passion project has evolved 
                into a dedicated web development service that prioritizes quality, innovation, and client satisfaction.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                I believe that every business deserves a professional online presence that reflects 
                their unique brand and values. That's why I take the time to understand each client's 
                goals, target audience, and vision before crafting custom solutions that exceed expectations.
              </p>

              <p className="text-lg leading-relaxed">
                My featured project, OneBowla2.com, showcases my commitment to modern design principles, 
                responsive development, and user-centric experiences. It represents the quality and 
                attention to detail that I bring to every project, regardless of size or complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every line of code, every design element, 
                and every user interaction is crafted with precision and care.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Client-Focused</h3>
              <p className="text-gray-600">
                Your success is our success. We work closely with clients to understand 
                their needs and deliver solutions that exceed expectations.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Timely Delivery</h3>
              <p className="text-gray-600">
                We respect deadlines and understand the importance of launching on time. 
                Our efficient processes ensure projects are delivered when promised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="p-8 border border-gray-200 rounded-xl card-hover">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Custom websites and web applications built with modern technologies like React, 
                Next.js, and TypeScript. From simple landing pages to complex web applications.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Responsive Design</li>
                <li>• Performance Optimization</li>
                <li>• SEO Implementation</li>
                <li>• Cross-browser Compatibility</li>
              </ul>
            </div>

            <div className="p-8 border border-gray-200 rounded-xl card-hover">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">E-commerce Solutions</h3>
              <p className="text-gray-600 mb-4">
                Complete e-commerce platforms with shopping carts, payment processing, 
                inventory management, and admin dashboards.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Payment Integration</li>
                <li>• Inventory Management</li>
                <li>• Order Processing</li>
                <li>• Customer Management</li>
              </ul>
            </div>

            <div className="p-8 border border-gray-200 rounded-xl card-hover">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">
                Beautiful, intuitive user interfaces that provide exceptional user experiences 
                across all devices and screen sizes.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• User Research</li>
                <li>• Wireframing & Prototyping</li>
                <li>• Visual Design</li>
                <li>• Usability Testing</li>
              </ul>
            </div>

            <div className="p-8 border border-gray-200 rounded-xl card-hover">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Maintenance & Support</h3>
              <p className="text-gray-600 mb-4">
                Ongoing maintenance, updates, and support to keep your website running 
                smoothly and securely.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Security Updates</li>
                <li>• Performance Monitoring</li>
                <li>• Content Updates</li>
                <li>• Technical Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. 
            We're excited to hear about your vision and help bring it to life.
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
    </div>
  )
}
