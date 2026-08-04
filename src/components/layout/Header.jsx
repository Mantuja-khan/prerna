import { useState, useEffect } from 'react'
import logo from "../../assets/logo.png"
import { NavLink, Link } from 'react-router-dom'
import { FaHome, FaBox, FaCogs, FaInfoCircle, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const offset = 40
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
    { name: 'About', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200' 
          : 'bg-white py-3.5 border-b border-slate-100 shadow-xs'
      }`}>
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="PrernaInfotech Logo"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links & Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    `px-4 py-2 rounded-full text-xs lg:text-sm font-semibold tracking-wide transition-all duration-300 ${
                      isActive 
                        ? 'bg-primary-50 text-primary-600 border border-primary-200/80 shadow-xs' 
                        : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Phone Contact CTA */}
            <div className="flex items-center gap-3 pl-2">
              <a 
                href="tel:+919982686232" 
                className="px-4 py-2 rounded-full text-xs font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-sm flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <FaPhoneAlt className="text-[11px]" />
                <span>+91 9982686232</span>
              </a>

              {/* Thick Tilted Line Accent at Right Side */}
              <div className="w-2 sm:w-2.5 h-7 sm:h-9 bg-gradient-to-b from-blue-600 via-sky-500 to-primary-700 rounded-sm transform -skew-x-[25deg] shadow-md shadow-sky-500/25 ml-1"></div>
            </div>
          </div>

          {/* Mobile Right Section with Tilted Line Accent */}
          <div className="md:hidden flex items-center gap-2">
            <a 
              href="tel:+919982686232" 
              className="p-2 rounded-full bg-primary-600 text-white shadow-xs"
            >
              <FaPhoneAlt className="text-xs" />
            </a>
            {/* Mobile Thick Tilted Line Accent */}
            <div className="w-2 h-7 bg-gradient-to-b from-blue-600 via-sky-500 to-primary-700 rounded-sm transform -skew-x-[25deg] shadow-xs"></div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className={`md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-2xl z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="grid grid-cols-5 items-center py-2 px-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `flex flex-col items-center py-1.5 px-1 rounded-xl transition-all ${
                  isActive ? 'text-primary-600 font-semibold bg-primary-50' : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              <span className="text-base mb-1">{link.icon}</span>
              <span className="text-[10px] tracking-tight">{link.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Header