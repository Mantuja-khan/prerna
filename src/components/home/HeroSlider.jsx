import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaPhoneAlt, FaCheck, FaHeadset, FaShieldAlt, FaLock, FaDesktop } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import cloud from "../../assets/cloud_services_hero.png"
import tally_sales from "../../assets/tally_sales_hero.png"

const slides = [
  {
    id: 1,
    title: "Tally Sales &",
    highlight: "Services",
    subtitle: "AUTHORIZED TALLY PARTNER & COMPLETE SOLUTIONS",
    description: "Get genuine Tally Prime licensing, custom Tally module development, seamless data sync, and fast 24/7 technical support for business accounting.",
    badge: "Authorized Tally Partner",
    image: tally_sales,
    link: "/products",
    highlights: [
      { text: "Authorized Support", icon: <FaShieldAlt /> },
      { text: "Expert Technicians", icon: <FaLock /> },
      { text: "Quick Response", icon: <FaDesktop /> }
    ]
  },
  {
    id: 2,
    title: "Tally on Cloud",
    highlight: "Solutions",
    subtitle: "SECURE REMOTE ACCESS ANYTIME & ANYWHERE",
    description: "Run Tally Prime seamlessly on Cloud from Windows, Mac, Android or iOS with high-speed performance, automatic backups, and maximum data security.",
    badge: "Tally Cloud Partner",
    image: cloud,
    link: "/products",
    highlights: [
      { text: "24/7 Cloud Access", icon: <FaShieldAlt /> },
      { text: "Auto Daily Backups", icon: <FaLock /> },
      { text: "High Speed RDP", icon: <FaDesktop /> }
    ]
  },
  {
    id: 3,
    title: "Cloud Services",
    highlight: "Solutions",
    subtitle: "MODERNIZE YOUR BUSINESS INFRASTRUCTURE",
    description: "Access your accounting software, databases, and critical business files from anywhere with high-performance, secure cloud hosting.",
    badge: "Remote Cloud Hosting",
    image: cloud,
    link: "/services",
    highlights: [
      { text: "99.9% Uptime", icon: <FaShieldAlt /> },
      { text: "End-to-End Encryption", icon: <FaLock /> },
      { text: "Remote Access", icon: <FaDesktop /> }
    ]
  }
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const intervalRef = useRef(null)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlay, currentSlide])

  return (
    <div 
      className="relative min-h-[580px] lg:min-h-[640px] overflow-hidden bg-[#f4f8fd] text-slate-800"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Background Soft Radial Blue Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/70 via-sky-50/40 to-transparent pointer-events-none"></div>

      {/* Decorative Outer Ring on Left Background */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full border border-blue-200/40 bg-blue-100/30 filter blur-2xl pointer-events-none"></div>

      {/* Dot Matrix Pattern - Top Right & Bottom Left */}
      <div className="absolute top-10 right-12 grid grid-cols-6 gap-2.5 opacity-30 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#93c5fd] rounded-full"></div>
        ))}
      </div>

      <div className="absolute bottom-10 left-12 grid grid-cols-6 gap-2.5 opacity-30 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#93c5fd] rounded-full"></div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12 lg:py-16 min-h-[580px] lg:min-h-[640px] flex items-center">
        <AnimatePresence mode="wait">
          <div
            key={currentSlide}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full"
          >
            {/* Left Content Column (Animates from top) */}
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 space-y-5 sm:space-y-6"
            >
              {/* Badge & Slide Counter Row */}
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#e0edff] text-[#0284c7] border border-blue-200/60 flex items-center gap-1.5 shadow-xs">
                  <span className="text-amber-500">⚡</span> {slides[currentSlide].badge}
                </span>

                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono text-[#0284c7] bg-[#e0edff]/80 font-semibold border border-blue-200/40">
                  0{currentSlide + 1} / 0{slides.length}
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm font-bold tracking-widest text-[#0284c7] uppercase">
                {slides[currentSlide].subtitle}
              </p>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0f172a] leading-[1.1]">
                {slides[currentSlide].title}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#2563eb]">
                  {slides[currentSlide].highlight}
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                {slides[currentSlide].description}
              </p>

              {/* Bullet Features Capsule Bar */}
              <div className="inline-flex flex-wrap items-center gap-3.5 bg-white/90 backdrop-blur-md p-2 sm:p-2.5 rounded-2xl border border-blue-100 shadow-sm">
                {slides[currentSlide].highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50/70 text-xs sm:text-sm text-slate-700 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-[#0284c7] flex items-center justify-center text-white text-[10px] shadow-xs">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to={slides[currentSlide].link}
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-sky-500/25 flex items-center gap-2.5 transition-all duration-300 hover:scale-105"
                >
                  Explore Solutions
                  <FaArrowRight className="text-xs" />
                </Link>

                <Link
                  to="/contact"
                  className="bg-white hover:bg-slate-50 border border-blue-200 text-slate-700 font-semibold text-sm px-8 py-3.5 rounded-full shadow-xs flex items-center gap-2.5 transition-all duration-300 hover:scale-105"
                >
                  <FaPhoneAlt className="text-xs text-[#0284c7]" /> Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Hero Graphic (Animates from right) */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 80, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] flex flex-col items-center justify-center py-4">
                {/* Circular Ambient Light Blue Backdrop Plate */}
                <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-tr from-blue-200/50 via-sky-100/60 to-blue-50/30 border border-blue-200/40 shadow-inner pointer-events-none"></div>

                {/* Hero Transparent Image */}
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="relative z-10 w-full max-h-[280px] sm:max-h-[340px] lg:max-h-[380px] object-contain filter drop-shadow-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white text-slate-700 border border-slate-200/80 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 focus:outline-none"
      >
        <FaChevronLeft className="text-sm" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white text-slate-700 border border-slate-200/80 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 focus:outline-none"
      >
        <FaChevronRight className="text-sm" />
      </button>

      {/* Bottom Capsule Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/80 shadow-sm">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full focus:outline-none ${
              currentSlide === idx 
                ? 'w-7 h-2 bg-[#0284c7]' 
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
            title={slide.title}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider