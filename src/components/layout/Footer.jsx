import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Dotted Pattern Overlay */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-20 pointer-events-none" />
      
      {/* Corner Dotted SVG Matrix Accents */}
      <div className="absolute top-4 left-4 pointer-events-none opacity-20 hidden md:block">
        <svg width="120" height="120" fill="none">
          <pattern id="dot-footer-1" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="2" fill="#ffffff" />
          </pattern>
          <rect width="120" height="120" fill="url(#dot-footer-1)" />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 pointer-events-none opacity-20 hidden md:block">
        <svg width="120" height="120" fill="none">
          <pattern id="dot-footer-2" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="2" fill="#ffffff" />
          </pattern>
          <rect width="120" height="120" fill="url(#dot-footer-2)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* Logo Image */}
            <div className="mb-4">
              <img 
                src={logo} 
                alt="PrernaInffotech Logo" 
                className="h-12 w-auto max-w-full object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'block'
                }}
              />
              {/* Fallback text (hidden by default) */}
              <h3 className="text-xl font-bold text-white hidden">PrernaInffotech</h3>
            </div>
            
            <p className="mb-4 text-gray-300">
              Providing innovative IT solutions for businesses of all sizes since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">IT Solutions</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Solution Implementation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Onsite Support</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Remote Support</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Tally Customization</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Tally on Cloud</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {/* Address 1 */}
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium text-white mb-1">Bhiwadi Office</div>
                  <div>F-GF-70,71, Ground floor, Capital Highstreet, Bhiwadi, Raj-301019</div>
                </div>
              </li>
              
              {/* Address 2 */}
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="font-medium text-white mb-1">Alwar Office</div>
                  <div>1st Floor, Mahatma Gandhi Market,
Road No. 2, Alwar (Rajasthan) - 301001</div>
                </div>
              </li>

              <li className="flex items-center">
                <FaPhone className="text-primary-400 mr-3" />
                <span className="text-gray-300">+91 998-2686-232
                     <br />
                  +91 935-8853-990</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-400 mr-3" />
                <span className="text-gray-300">prernainffotech@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} PrernaInffotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer