import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaDirections } from 'react-icons/fa'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import SectionTitle from '../components/ui/SectionTitle'

const Contact = () => {
  const position = [27.5675289, 76.6160462] // Prerna Infotech coordinates
  const phoneNumber = '93588-53990'
  const email = 'Vishal@prernainffotech.com'
  const whatsappNumber = '93588-53990'
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }
  
  const handleEmail = () => {
    window.location.href = `mailto:${main}`
  }
  
  const handleWhatsApp = () => {
    window.location.href = `https://wa.me/${9358853990}`
  }

  const handleDirections = () => {
    window.open('https://www.google.com/maps/dir//Prerna+Infotech/@27.5675434,76.6156098,115m/data=!3m2!1e3!5s0x39729992e52c2657:0x84db75318cb6c45e!4m6!3m5!1s0x397299dbc2342745:0x1598831800888e38!8m2!3d27.5675289!4d76.6160462!16s%2Fg%2F11gq5fct09', '_blank')
  }
  
  return (
    <>
      <Helmet>
        <title>Contact Us - Prerna Infotech</title>
        <meta name="description" content="Get in touch with Prerna Infotech. Contact us for inquiries, support, or to schedule a consultation." />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </Helmet>
      {/* Top CTA Header Section */}
      <section className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        {/* Dotted Pattern Overlay */}
        <div className="absolute inset-0 bg-dotted-pattern opacity-35 pointer-events-none" />
        
        {/* Decorative Dotted Matrix SVG */}
        <div className="absolute top-4 left-6 pointer-events-none opacity-30 hidden sm:block">
          <svg width="110" height="110" fill="none">
            <pattern id="dot-cnt-top-1" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="2.5" fill="#38bdf8" />
            </pattern>
            <rect width="110" height="110" fill="url(#dot-cnt-top-1)" />
          </svg>
        </div>
        <div className="absolute bottom-4 right-6 pointer-events-none opacity-30 hidden sm:block">
          <svg width="110" height="110" fill="none">
            <pattern id="dot-cnt-top-2" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="2.5" fill="#38bdf8" />
            </pattern>
            <rect width="110" height="110" fill="url(#dot-cnt-top-2)" />
          </svg>
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-3.5 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30 inline-block mb-3"
          >
            Instant Sales & Technical Assistance
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            Contact Our Expert Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8"
          >
            Have questions about Tally Prime licenses, Tally on Cloud setups, or custom IT services? We're here to help.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button 
              onClick={handleCall} 
              className="px-7 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-full shadow-lg transition-all text-sm flex items-center gap-2"
            >
              <FaPhone /> Call Us Now
            </button>
            <button 
              onClick={handleWhatsApp} 
              className="px-7 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full shadow-lg transition-all text-sm flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg" /> Chat on WhatsApp
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionTitle 
                title="Get in Touch" 
                subtitle="We'd love to hear from you"
              />
              
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-sm md:text-base text-gray-600 mb-6">
                  Have questions about our services or products? Need support with your IT infrastructure? 
                  Our team is ready to assist you. Contact us using any of the methods below.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-500 p-3 rounded-full text-white mr-4">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold">Address</h3>
                      <p className="text-sm text-gray-600">Prerna Infotech, Alwar, Rajasthan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-500 p-3 rounded-full text-white mr-4">
                      <FaClock />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold">Business Hours</h3>
                      <p className="text-sm text-gray-600">Monday - Saturday: 10:00 AM - 6:00 PM</p>
                      <p className="text-sm text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Buttons - Changed to horizontal layout on small screens */}
              <motion.div
                className="flex flex-row gap-2 sm:gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button
                  onClick={handleCall}
                  className="flex items-center justify-center gap-1 sm:gap-2 bg-primary-500 text-white py-2 sm:py-3 px-3 sm:px-6 rounded-lg hover:bg-primary-600 transition-colors flex-1 text-xs sm:text-sm"
                >
                  <FaPhone className="text-xs sm:text-sm" />
                  <span>Call</span>
                </button>
                
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-1 sm:gap-2 bg-green-500 text-white py-2 sm:py-3 px-3 sm:px-6 rounded-lg hover:bg-green-600 transition-colors flex-1 text-xs sm:text-sm"
                >
                  <FaWhatsapp className="text-xs sm:text-sm" />
                  <span>WhatsApp</span>
                </button>
                
               
              </motion.div>
              
              <motion.div
                className="rounded-lg overflow-hidden h-64 md:h-80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <MapContainer 
                  center={position} 
                  zoom={16} 
                  style={{ height: '100%', width: '100%' }}
                  dragging={true}
                  touchZoom={true}
                  doubleClickZoom={true}
                  scrollWheelZoom={false}
                  boxZoom={true}
                  keyboard={true}
                  zoomControl={true}
                  attributionControl={true}
                  // Disable single finger dragging on touch devices
                  tap={false}
                  // Enable two-finger gestures only
                  gestureHandling={true}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position}>
                    <Popup>
                      Prerna Infotech <br />
                      <button
                        onClick={handleDirections}
                        className="flex items-center gap-2 text-primary-600 mt-2 hover:text-primary-700"
                      >
                        <FaDirections />
                        <span>Get Directions</span>
                      </button>
                    </Popup>
                  </Marker>
                </MapContainer>
              </motion.div>
            </div>
            
            {/* FAQ Section */}
            <div>
              <SectionTitle 
                title="Frequently Asked Questions" 
                subtitle="Find quick answers to common questions"
              />
              
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {[
                  {
                    question: "What types of businesses do you work with?",
                    answer: "We work with businesses of all sizes across various industries, from small startups to large enterprises."
                  },
                  {
                    question: "Do you offer ongoing support?",
                    answer: "Yes, we provide comprehensive technical support and maintenance services for accounting software and IT systems."
                  },
                  {
                    question: "How quickly can you respond to support requests?",
                    answer: "Our standard response time is within 4 hours for critical issues and 24 hours for non-critical issues."
                  },
                  {
                    question: "What is your service area?",
                    answer: "We primarily serve clients in Alwar and surrounding areas, but we can provide remote services nationwide."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 md:p-6"
                  >
                    <h3 className="text-base md:text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-sm md:text-base text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Contact