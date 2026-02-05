import { useState, useRef, useEffect } from 'react'
import { FaPhone, FaWhatsapp, FaTimes, FaHeadset } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const ContactButton = () => {
  const [showPopup, setShowPopup] = useState(false)
  const buttonRef = useRef(null)
  const popupRef = useRef(null)
  
  const handleCall = () => {
    window.location.href = 'tel:9982686232'
  }

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/9358853990'
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showPopup && 
          buttonRef.current && 
          popupRef.current && 
          !buttonRef.current.contains(event.target) && 
          !popupRef.current.contains(event.target)) {
        setShowPopup(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showPopup])

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setShowPopup(!showPopup)}
        className="fixed bottom-20 md:bottom-8 left-4 z-50 bg-primary-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-300"
      >
        <FaHeadset className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <AnimatePresence>
        {showPopup && (
          <motion.div 
            ref={popupRef}
            className="fixed bottom-20 md:bottom-8 left-16 md:left-20 z-50"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-white rounded-lg p-4 shadow-xl w-48 md:w-56">
              <div className="space-y-3">
                <button
                  onClick={handleCall}
                  className="w-full py-2 px-3 bg-primary-600 text-white text-sm md:text-base rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-700 transition-colors"
                >
                  <FaPhone className="w-4 h-4" />
                  <span>Call Us</span>
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full py-2 px-3 bg-green-500 text-white text-sm md:text-base rounded-lg flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ContactButton