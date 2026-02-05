import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaServer, FaCheck, FaArrowRight } from 'react-icons/fa'
import SectionTitle from '../../components/ui/SectionTitle'
import ContactForm from '../../components/ui/ContactForm'

const CampusServer = () => {
  const [showContactForm, setShowContactForm] = useState(false)

  const features = [
    "Student/Employee management",
    "Attendance tracking",
    "Course management",
    "Resource scheduling",
    "Library management",
    "Exam management",
    "Fee management",
    "Reports and analytics"
  ]

  const handleGetStarted = () => {
    setShowContactForm(true)
  }

  return (
    <>
      <Helmet>
        <title>Campus Server Solutions - TechSolutions</title>
        <meta name="description" content="Comprehensive campus server solutions for educational institutions and corporate campuses." />
      </Helmet>

      <section className="relative py-24 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Campus Server" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Campus Server Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive management solutions for educational institutions
            </motion.p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-500 text-white p-8 rounded-lg shadow-lg flex items-center justify-center" style={{ height: '300px' }}>
                <div className="text-center">
                  <FaServer className="text-6xl mb-4" />
                  <h3 className="text-2xl font-bold">Campus Management System</h3>
                </div>
              </div>
            </motion.div>

            <div>
              <SectionTitle 
                title="Campus Management Solutions" 
                subtitle="Streamline your campus operations with our integrated system"
              />

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheck className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        planName="Custom Quote"
        serviceName="Campus Server"
      />
    </>
  )
}

export default CampusServer