import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaTag, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const ContactForm = ({ isOpen, onClose, planName = '', serviceName = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    planName: planName,
    serviceName: serviceName,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Comprehensive EmailJS template parameters with all user data
      const templateParams = {
        // Basic contact information
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        
        // Service information
        selected_service: formData.serviceName || 'Not specified',
        selected_plan: formData.planName || 'Not specified',
        service_plan_combo: formData.serviceName && formData.planName 
          ? `${formData.serviceName} - ${formData.planName}` 
          : 'Not specified',
        
        // Message content
        user_message: formData.message || `Customer interested in ${formData.serviceName || 'our services'}${formData.planName ? ` - ${formData.planName} plan` : ''}`,
        
        // Additional template variables for email formatting
        to_name: 'TechSolutions Team',
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        
        // Timestamp for record keeping
        submission_date: new Date().toLocaleString(),
        
        // Complete summary for easy reading
        inquiry_summary: `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.serviceName || 'Not specified'}
Plan: ${formData.planName || 'Not specified'}
Message: ${formData.message || 'No additional message provided'}
Submitted: ${new Date().toLocaleString()}
        `.trim()
      }

      // Log the data being sent for debugging (remove in production)
      console.log('Sending EmailJS template with parameters:', templateParams)

      // Send email with comprehensive data
      const result = await emailjs.send(
        'service_l4esyp5', // Replace with your EmailJS service ID
        'template_yyxzm9w', // Replace with your EmailJS template ID
        templateParams,
        '7YkggcXqnAppuHI5v' // Replace with your EmailJS public key
      )

      console.log('EmailJS response:', result)
      setSubmitStatus('success')
      
      // Reset form but keep service/plan info for next submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        planName: planName,
        serviceName: serviceName,
        message: ''
      })
      
      // Close form after 3 seconds to allow user to see success message
      setTimeout(() => {
        onClose()
        setSubmitStatus(null)
      }, 3000)

    } catch (error) {
      console.error('Error sending email:', error)
      console.error('Error details:', error.text || error.message)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div 
          className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="bg-primary-600 text-white p-6 rounded-t-lg relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="text-primary-100">
              {serviceName && planName ? `Interested in ${serviceName} - ${planName}` : 'Get in touch with our team'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUser className="inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaEnvelope className="inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaPhone className="inline mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Service & Plan Info */}
            {(serviceName || planName) && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaTag className="inline mr-2" />
                  Service & Plan
                </label>
                <input
                  type="text"
                  value={`${serviceName || 'Service'} - ${planName || 'Plan'}`}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>
            )}

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us more about your requirements, preferred contact time, or any specific questions..."
              />
            </div>

            {/* Submit Status */}
            {submitStatus === 'success' && (
              <motion.div 
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ All your details have been sent successfully! We'll contact you within 24 hours.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ❌ Failed to send your details. Please try again or contact us directly.
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700 transform hover:scale-105'
              } text-white`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending Your Details...
                </>
              ) : (
                <>
                  <FaPaperPlane className="mr-2" />
                  Send All Details
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
            <p className="text-sm text-gray-600 text-center">
              🔒 Your information is secure. We'll respond within 24 hours with personalized assistance.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default ContactForm