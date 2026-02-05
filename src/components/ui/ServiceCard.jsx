import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const ServiceCard = ({ title, description, icon, link, delay = 0 }) => {
  return (
    <motion.div 
      className="card p-4 sm:p-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="text-primary-500 mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow text-sm sm:text-base">{description}</p>
      
    </motion.div>
  )
}

export default ServiceCard