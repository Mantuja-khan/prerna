import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialCard = ({ name, position, company, testimonial, image, delay = 0 }) => {
  return (
    <motion.div 
      className="card p-6 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-600">{position}, {company}</p>
        </div>
      </div>
      
      <div className="relative">
        <FaQuoteLeft className="text-primary-200 text-4xl absolute -top-2 -left-2 opacity-50" />
        <p className="text-gray-700 relative z-10 pl-4">{testimonial}</p>
      </div>
    </motion.div>
  )
}

export default TestimonialCard