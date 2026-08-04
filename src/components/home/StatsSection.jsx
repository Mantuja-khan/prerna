import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FaUsers, FaLaptopCode, FaSmile, FaTrophy } from 'react-icons/fa'

const stats = [
  { id: 1, label: 'Happy Clients', value: 4000, icon: <FaSmile className="text-4xl text-primary-500 mb-4" /> },
  { id: 2, label: 'Projects Completed', value: 400, icon: <FaLaptopCode className="text-4xl text-primary-500 mb-4" /> },
  { id: 3, label: 'Team Members', value: 10, icon: <FaUsers className="text-4xl text-primary-500 mb-4" /> },
  { id: 4, label: 'Years Experience', value: 12, icon: <FaTrophy className="text-4xl text-primary-500 mb-4" /> },
]

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })
  
  useEffect(() => {
    let startTime
    let animationFrame
    
    if (inView) {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }
      
      animationFrame = requestAnimationFrame(animate)
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [inView, end, duration])
  
  return <span ref={ref}>{count}</span>
}

const StatsSection = () => {
  return (
    <section className="bg-primary-600 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="text-center text-white"
            >
              {stat.icon}
              <h3 className="text-2xl sm:text-4xl font-bold mb-2">
                <CountUp end={stat.value} duration={2000} />+
              </h3>
              <p className="text-sm sm:text-lg text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection