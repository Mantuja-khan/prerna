import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight, FaTimes, FaWhatsapp, FaPhone, FaFileAlt, FaCreditCard, FaCloudUploadAlt, FaShieldAlt } from 'react-icons/fa'
import { useState } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import buzy from "../assets/busy_cloud.png"
import tally from "../assets/tally_images.jpeg"
// Add these imports for new product images
// import docs2u from "../assets/docs2u.png"
// import credflow from "../assets/credflow.png"

const Products = () => {
  const [showContactPopup, setShowContactPopup] = useState(false)
  
  const tallyFeatures = [
    "Complete accounting solution with GST compliance",
    "Inventory management with real-time tracking",
    "Payroll management and statutory compliance",
    "Banking and financial management",
    "Customizable reports and dashboards"
  ]
  
  const bizcloudFeatures = [
    "Centralized data management system",
    "Secure file storage and sharing",
    "Real-time collaboration tools",
    "Mobile access on any device",
    "Advanced security features"
  ]

  const docs2uFeatures = [
    "Intelligent document digitization and OCR",
    "Automated data extraction and processing",
    "Multi-format document support (PDF, Images, Scans)",
    "Cloud-based document management",
    "Advanced search and indexing capabilities"
  ]

  const credflowFeatures = [
    "Automated invoice processing and management",
    "Real-time cash flow tracking and forecasting",
    "Credit risk assessment and monitoring",
    "Payment reminder automation",
    "Financial reporting and analytics"
  ]

  // Contact information
  const contacts = {
    whatsapp: [
      { name: "Sales Manager", number: "+919358853990" },
      { name: "Technical Support", number: "+91 9116040232" }
    ],
    phone: [
      { name: "Main Office", number: "+919950726232" },
    ]
  }

  const handleWhatsAppClick = (number) => {
    const message = encodeURIComponent("Hello! I'm interested in your products and would like to know more.")
    window.open(`https://wa.me/${number.replace(/[^0-9]/g, '')}?text=${message}`, '_blank')
  }

  const handlePhoneClick = (number) => {
    window.open(`tel:${number}`, '_self')
  }
  
  return (
    <>
      <Helmet>
        <title>Products - TechSolutions</title>
        <meta name="description" content="Explore our comprehensive business solutions: Tally for accounting, BizCloudConnect for cloud management, Docs2u for document digitization, and Credflow for credit management." />
      </Helmet>
 
    {/* Tally Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl">
                <img 
                  src={tally} 
                  alt="Tally Software" 
                  className="rounded-xl shadow-lg w-full h-64 lg:h-80 object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white p-3 rounded-full shadow-lg">
                <FaCheck className="text-xl" />
              </div>
            </motion.div>
            
            <div>
              <SectionTitle 
                title="Tally" 
                subtitle="Complete Business Management Solution"
              />
              
              <motion.p
                className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Tally is a comprehensive business management software that helps you manage your accounting, inventory, payroll, and more. Our customization services ensure that Tally meets your specific business requirements.
              </motion.p>
              
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">Key Features:</h3>
                <ul className="grid grid-cols-1 gap-2 md:gap-3">
                  {tallyFeatures.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start p-2 md:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <FaCheck className="text-primary-500 mt-0.5 md:mt-1 mr-2 md:mr-3 flex-shrink-0 text-sm" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Buttons for Tally */}
              <motion.div
                className="flex flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button
                  onClick={() => window.open('tel:+919358853990', '_self')}
                  className="flex items-center justify-center flex-1 px-4 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <FaPhone className="mr-1 md:mr-2 text-sm" />
                  Call Us
                </button>
                <button
                  onClick={() => window.open('https://wa.me/919358853990?text=Hi, I\'m interested in Tally software. Can you help me?', '_blank')}
                  className="flex items-center justify-center flex-1 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <FaWhatsapp className="mr-1 md:mr-2 text-sm" />
                  Chat With Us
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* BizCloudConnect Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle 
                title="BizCloudConnect" 
                subtitle="Cloud-Based Business Management Platform"
              />
              
              <motion.p
                className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                BizCloudConnect is our flagship cloud platform that brings together all aspects of your business in one secure, accessible location. Connect your team, manage your data, and streamline your operations from anywhere in the world.
              </motion.p>
              
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">Key Features:</h3>
                <ul className="grid grid-cols-1 gap-2 md:gap-3">
                  {bizcloudFeatures.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start p-2 md:p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <FaCheck className="text-primary-500 mt-0.5 md:mt-1 mr-2 md:mr-3 flex-shrink-0 text-sm" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Buttons for BizCloudConnect */}
              <motion.div
                className="flex flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button
                  onClick={() => window.open('tel:+919358853990', '_self')}
                  className="flex items-center justify-center flex-1 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <FaPhone className="mr-1 md:mr-2 text-sm" />
                  Call Us
                </button>
                <button
                  onClick={() => window.open('https://wa.me/919358853990?text=Hi, I\'m interested in BizCloudConnect platform. Can you help me?', '_blank')}
                  className="flex items-center justify-center flex-1 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <FaWhatsapp className="mr-1 md:mr-2 text-sm" />
                  Chat With Us
                </button>
              </motion.div>
            </div>
            
            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-blue-100 p-6 rounded-2xl">
                <img 
                  src={buzy} 
                  alt="BizCloudConnect" 
                  className="rounded-xl shadow-lg w-full h-64 lg:h-80 object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
                <FaCloudUploadAlt className="text-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Docs2u Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-50 to-teal-100 p-6 rounded-2xl">
                {/* Placeholder for Docs2u image - replace with actual image */}
                <div className="bg-white rounded-xl shadow-lg w-full h-64 lg:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <FaFileAlt className="text-6xl text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">Docs2u</h3>
                    <p className="text-gray-600">Document Management</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <FaFileAlt className="text-xl" />
              </div>
            </motion.div>
            
            <div>
              <SectionTitle 
                title="Docs2u" 
                subtitle="Intelligent Document Management & Digitization"
              />
              
              <motion.p
                className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Transform your paper-based processes with Docs2u's intelligent document management system. Digitize, organize, and automate your document workflows with advanced AI-powered features and seamless integration capabilities.
              </motion.p>
              
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">Key Features:</h3>
                <ul className="grid grid-cols-1 gap-2 md:gap-3">
                  {docs2uFeatures.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start p-2 md:p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <FaCheck className="text-green-500 mt-0.5 md:mt-1 mr-2 md:mr-3 flex-shrink-0 text-sm" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Buttons for Docs2u */}
              <motion.div
                className="flex flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button
                  onClick={() => window.open('tel:+919358853990', '_self')}
                  className="flex items-center justify-center flex-1 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <FaPhone className="mr-1 md:mr-2 text-sm" />
                  Call Us
                </button>
                <button
                  onClick={() => window.open('https://wa.me/919358853990?text=Hi, I\'m interested in Docs2u document management system. Can you help me?', '_blank')}
                  className="flex items-center justify-center flex-1 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <FaWhatsapp className="mr-1 md:mr-2 text-sm" />
                  Chat With Us
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Credflow Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle 
                title="Credflow" 
                subtitle="Advanced Credit & Cash Flow Management"
              />
              
              <motion.p
                className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Optimize your financial operations with Credflow's comprehensive credit management and cash flow analytics platform. Make informed decisions, reduce risks, and improve your working capital management with real-time insights.
              </motion.p>
              
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">Key Features:</h3>
                <ul className="grid grid-cols-1 gap-2 md:gap-3">
                  {credflowFeatures.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start p-2 md:p-3 bg-white rounded-lg hover:bg-orange-50 transition-colors shadow-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <FaCheck className="text-orange-500 mt-0.5 md:mt-1 mr-2 md:mr-3 flex-shrink-0 text-sm" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Buttons for Credflow */}
              <motion.div
                className="flex flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button
                  onClick={() => window.open('tel:+919358853990', '_self')}
                  className="flex items-center justify-center flex-1 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <FaPhone className="mr-1 md:mr-2 text-sm" />
                  Call Us
                </button>
                <button
                  onClick={() => window.open('https://wa.me/919358853990?text=Hi, I\'m interested in Credflow credit management platform. Can you help me?', '_blank')}
                  className="flex items-center justify-center flex-1 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  <FaWhatsapp className="mr-1 md:mr-2 text-sm" />
                  Chat With Us
                </button>
              </motion.div>
            </div>
            
            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-2xl">
                {/* Placeholder for Credflow image - replace with actual image */}
                <div className="bg-white rounded-xl shadow-lg w-full h-64 lg:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <FaCreditCard className="text-6xl text-orange-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">Credflow</h3>
                    <p className="text-gray-600">Credit Management</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                <FaCreditCard className="text-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Our Solutions?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our integrated suite of products work seamlessly together to provide comprehensive business solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaShieldAlt, title: "Secure & Reliable", desc: "Enterprise-grade security with 99.9% uptime" },
              { icon: FaCloudUploadAlt, title: "Cloud-Based", desc: "Access your data anywhere, anytime" },
              { icon: FaCheck, title: "Easy Integration", desc: "Seamless integration with existing systems" },
              { icon: FaArrowRight, title: "Scalable Solutions", desc: "Grow with your business needs" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="text-4xl mb-4 mx-auto text-white" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact our expert team to discuss your specific requirements and discover how our solutions can streamline your operations.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              className="btn bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 text-lg"
              onClick={() => setShowContactPopup(true)}
            >
              Contact Sales Team
              <FaArrowRight className="ml-2" />
            </button>
            <span className="text-gray-500">or</span>
            <button 
              className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 px-6 py-3"
              onClick={() => setShowContactPopup(true)}
            >
              Schedule a Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Popup */}
      {showContactPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-t-2xl">
              <h3 className="text-xl font-semibold">Contact Our Team</h3>
              <button
                onClick={() => setShowContactPopup(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-6 text-center">
                Choose your preferred way to get in touch with us
              </p>

              {/* WhatsApp Contacts */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <FaWhatsapp className="text-green-500 mr-2" />
                  WhatsApp
                </h4>
                <div className="space-y-3">
                  {contacts.whatsapp.map((contact, index) => (
                    <button
                      key={index}
                      onClick={() => handleWhatsAppClick(contact.number)}
                      className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-green-50 hover:border-green-300 transition-all duration-200 group"
                    >
                      <div className="text-left">
                        <div className="font-medium text-gray-800">{contact.name}</div>
                        <div className="text-sm text-gray-500">{contact.number}</div>
                      </div>
                      <FaWhatsapp className="text-green-500 text-xl group-hover:scale-110 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone Contacts */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <FaPhone className="text-blue-500 mr-2" />
                  Phone Call
                </h4>
                <div className="space-y-3">
                  {contacts.phone.map((contact, index) => (
                    <button
                      key={index}
                      onClick={() => handlePhoneClick(contact.number)}
                      className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 group"
                    >
                      <div className="text-left">
                        <div className="font-medium text-gray-800">{contact.name}</div>
                        <div className="text-sm text-gray-500">{contact.number}</div>
                      </div>
                      <FaPhone className="text-blue-500 text-xl group-hover:scale-110 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6">
              <button
                onClick={() => setShowContactPopup(false)}
                className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Products