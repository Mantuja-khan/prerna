import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-primary-600 opacity-90 z-0" />
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact us today to discover how our IT solutions can help your business grow and succeed in the digital landscape.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Contact Us
            </Link>
            <Link to="/services" className="btn border-2 border-white text-white hover:bg-white/10">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection