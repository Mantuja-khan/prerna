import { useState, useEffect } from 'react'
import logo from "../../assets/logo.png"
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes, FaHome, FaBox, FaCogs, FaInfoCircle, FaEnvelope, FaCloud, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const [showCloudMenu, setShowCloudMenu] = useState(false)
  const [showMobileCloudMenu, setShowMobileCloudMenu] = useState(false)
  
  const cloudServices = [
    { name: 'Cloud Email', path: '/cloud/email' },
    { name: 'Cloud Backup', path: '/cloud/backup' },
    { name: 'Web Development', path: '/cloud/web-development' },
    { name: 'Campus Server', path: '/cloud/campus-server' },
  ]
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const offset = 50
      const scrollingDown = prevScrollPos < currentScrollPos

      setScrolled(currentScrollPos > offset)

      if (currentScrollPos > offset) {
        setVisible(!scrollingDown)
      } else {
        setVisible(true)
      }

      setPrevScrollPos(currentScrollPos)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])
  
  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Products', path: '/products', icon: <FaBox /> },
    { name: 'Services', path: '/services', icon: <FaCogs /> },
    { name: 'About ', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ]
  
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="Yasodanandani"
    className="h-8 md:h-10 w-auto"
  />
</Link>

          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 
                  ${isActive 
                    ? 'text-primary-600 font-semibold hover:text-primary-700' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Cloud Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowCloudMenu(true)}
              onMouseLeave={() => setShowCloudMenu(false)}
            >
              <button 
                className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-110 
                text-gray-700 hover:text-primary-600 hover:bg-primary-50 flex items-center gap-1"
              >
                <FaCloud className="text-sm" />
                Cloud
                <FaChevronDown className={`text-xs transition-transform ${showCloudMenu ? 'rotate-180' : ''}`} />
              </button>
              
              {showCloudMenu && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                  {cloudServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className={`md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="grid grid-cols-6 items-center py-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `flex flex-col items-center p-2 transition-colors ${
                  isActive ? 'text-primary-600' : 'text-gray-600'
                }`
              }
            >
              <span className="text-lg mb-1">{link.icon}</span>
              <span className="text-xs">{link.name}</span>
            </NavLink>
          ))}
          {/* Mobile Cloud Button with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowMobileCloudMenu(!showMobileCloudMenu)}
              className="flex flex-col items-center p-2 text-gray-600 w-full"
            >
              <span className="text-lg mb-1"><FaCloud /></span>
              <span className="text-xs">Cloud</span>
            </button>
            
            {/* Mobile Cloud Dropdown */}
            {showMobileCloudMenu && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border">
                <div className="flex items-center justify-between px-4 py-2 border-b">
                  <span className="font-semibold text-gray-700">Cloud Services</span>
                  <button
                    onClick={() => setShowMobileCloudMenu(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaChevronUp />
                  </button>
                </div>
                {cloudServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    onClick={() => setShowMobileCloudMenu(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header