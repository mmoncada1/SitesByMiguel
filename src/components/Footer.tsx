import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/favicon.svg" 
                alt="Sites by Miguel Logo" 
                className="w-8 h-8"
              />
              <h3 className="text-2xl font-bold gradient-text">Sites by Miguel</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Creating modern, responsive websites and web applications that drive results. 
              Specializing in custom web solutions for businesses of all sizes.
            </p>
            <p className="text-gray-400 text-sm">
              © 2025 Sites by Miguel. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: mmoncada105@gmail.com</p>
              <p>Phone: (734) 395-0077</p>
              <p>Location: Michigan, USA</p>
              <p>Portfolio Showcase:</p>
              <a 
                href="https://michiganstocksandbonds.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                michiganstocksandbonds.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
