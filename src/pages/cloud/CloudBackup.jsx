import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaDatabase, FaCheck, FaArrowRight, FaStar } from 'react-icons/fa'
import SectionTitle from '../../components/ui/SectionTitle'
import ContactForm from '../../components/ui/ContactForm'

const CloudBackup = () => {
  const [showContactForm, setShowContactForm] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const pricingPlans = [
    {
      name: "Basic",
      features: [
        "1+1 User Free",
        "500 MB Storage Space/User",
        "Minimum User Subs. - 5",
        "Mobile Access",
        "Automatic Backup",
        "Unlimited Bandwidth",
        "CloudDoc & CloudSheet App"
      ],
      buttonText: "Buy Now",
      popular: false,
      color: "bg-white border-gray-200"
    },
    {
      name: "Advanced",
      features: [
        "1+1 User Free",
        "1 GB Storage Space/User",
        "Minimum User Subs. - 10",
        "Mobile Access",
        "Automatic Backup",
        "Unlimited Bandwidth",
        "CloudDoc & CloudSheet App"
      ],
      buttonText: "Buy Now",
      popular: true,
      color: "bg-primary-50 border-primary-500"
    },
    {
      name: "Premium",
      features: [
        "1+1 User Free",
        "5 GB Storage Space/User",
        "Minimum User Subs. - 15",
        "Mobile Access",
        "Automatic Backup",
        "Unlimited Bandwidth",
        "CloudDoc & CloudSheet App"
      ],
      buttonText: "Buy Now",
      popular: false,
      color: "bg-white border-gray-200"
    }
  ]

  const handleBuyNow = (planName) => {
    setSelectedPlan(planName)
    setShowContactForm(true)
  }

  return (
    <>
      <Helmet>
        <title>Cloud Backup Services - TechSolutions</title>
        <meta name="description" content="Secure cloud backup solutions for businesses with automated backups, encryption, and quick data recovery options." />
      </Helmet>

      
       

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-500 text-white p-8 rounded-lg shadow-lg flex items-center justify-center" style={{ height: '300px' }}>
                <div className="text-center">
                  <FaDatabase className="text-6xl mb-4" />
                  <h3 className="text-2xl font-bold">Secure Data Backup</h3>
                </div>
              </div>
            </motion.div>

            <div>
              <SectionTitle 
                title="Data Protection Solutions" 
                subtitle="Keep your business data safe and accessible with our comprehensive backup plans"
              />
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Choose from our flexible pricing plans designed to meet the needs of businesses of all sizes. 
                All plans include our core backup features with varying storage capacities and user limits.
              </motion.p>
            </div>
          </div>

          {/* Pricing Cards Section */}
          <div className="mb-12">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-600">Select the perfect backup solution for your business needs</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative rounded-lg border-2 ${plan.color} p-8 shadow-lg transition-transform duration-300 hover:scale-105`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                        <FaStar className="mr-1" /> Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <FaCheck className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handleBuyNow(plan.name)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                      plan.popular 
                        ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-600 mb-6">Need a custom solution? We're here to help!</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        planName={selectedPlan}
        serviceName="Cloud Backup"
      />
    </>
  )
}

export default CloudBackup