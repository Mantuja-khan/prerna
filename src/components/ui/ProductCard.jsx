import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const ProductCard = ({ title, description, image, features, link, delay = 0 }) => {
  return (
    <motion.div 
      className="card overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {features && features.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        <Link 
          to={link} 
          className="btn btn-primary mt-auto self-start"
        >
          Explore <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </motion.div>
  )
}

export default ProductCard