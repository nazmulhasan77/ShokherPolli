import { Link } from 'react-router-dom'
import { FaLeaf, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Training', path: '/training' },
    { name: 'Finance', path: '/finance' },
    { name: 'Resort', path: '/resort' },
    { name: 'Contact', path: '/contact' },
  ]

  const projects = [
    'Poultry Farming',
    'Duck Farming',
    'Goat Farming',
    'Cattle Farming',
    'Agriculture',
    'Fish Farming',
    'Nursery',
  ]

  return (
    <footer className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <span className="text-3xl font-extrabold">শখের পল্লী</span>
            </div>
            <p className="text-green-200 mb-8 leading-relaxed">
              From Passion to Prosperity. An integrated digital ecosystem for agriculture, farming, training, finance, e-commerce, and rural entrepreneur development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <FaYoutube className="text-lg" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <FaTwitter className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-green-200 hover:text-white transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Projects */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-teal-400 rounded-full mr-3"></span>
              Our Projects
            </h3>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index}>
                  <a href="#" className="text-green-200 hover:text-white transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full mr-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-green-400" />
                </div>
                <span className="text-green-200 leading-relaxed">Village - Shokher Polli, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-green-400" />
                </div>
                <span className="text-green-200">+880 1234 567890</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-green-400" />
                </div>
                <span className="text-green-200">info@shokherpolli.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-300 text-center md:text-left">
              &copy; 2024 Shokher Polli. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-green-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
