import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import web_development from "../../assets/web_development.png"
import IT_solutions from "../../assets/it_solutions.png"
import cloud from "../../assets/cloud_services.png"

const slides = [
  {
    id: 1,
    title: "IT Services",
    subtitle: "Complete IT Solutions for Your Business",
    description: "We provide comprehensive IT services to help your business grow and succeed in the digital age. Our expert team delivers cutting-edge solutions tailored to your unique needs.",
    image: IT_solutions,
    link: "/services",
    color: "from-blue-600 to-purple-700"
  },
  {
    id: 2,
    title: "Cloud Solutions",
    subtitle: "Modernize Your Business Infrastructure",
    description: "Transform your business with our scalable and secure cloud solutions tailored to your needs. Experience seamless integration and enhanced productivity.",
    image: cloud,
    link: "/cloud",
    color: "from-emerald-600 to-teal-700"
  },
  {
    id: 3,
    title: "Web Development",
    subtitle: "Custom Websites & Web Applications",
    description: "Create a powerful online presence with our custom web development and design services. Build responsive, modern websites that convert visitors into customers.",
    image: web_development,
    link: "/services",
    color: "from-orange-600 to-red-700"
  }
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef(null)
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 5000) // Auto-slide every 5 seconds
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])
  
  return (
    <div className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 h-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen"
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} opacity-90`}></div>
            
            <div className="relative z-20 container mx-auto px-4 lg:px-8 h-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center h-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen py-8 lg:py-0">
                
                {/* Left Content */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-1"
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="inline-block"
                  >
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium border border-white/30">
                      ✨ Professional Services
                    </span>
                  </motion.div>
                  
                  {/* Subtitle */}
                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xs sm:text-sm md:text-base font-medium text-gray-200"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.h2>
                  
                  {/* Main Title */}
                  <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  
                  {/* Description */}
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed max-w-xl"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                  
                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-row gap-2 sm:gap-3 pt-2 sm:pt-4"
                  >
                    <Link
                      to={slides[currentSlide].link}
                      className="group bg-white text-gray-900 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-1 sm:gap-2 hover:bg-gray-100 transition-all duration-300"
                    >
                      Learn More
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-xs" />
                    </Link>
                    
                    <Link
                      to="/contact"
                      className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </motion.div>
                
                {/* Right Image */}
                <motion.div
                  initial={{ x: 100, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px]"
                    style={{ aspectRatio: '4/3' }}
                  >
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/20">
        <motion.div
          key={currentSlide}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 4, ease: 'linear' }}
          className="h-full bg-white"
        />
      </div>
    </div>
  )
}

export default HeroSlider