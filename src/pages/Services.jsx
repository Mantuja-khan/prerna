import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaServer, FaNetworkWired, FaUserCog, FaTools, FaLaptopCode, FaShieldAlt } from 'react-icons/fa'
import SectionTitle from '../components/ui/SectionTitle'
import ServiceCard from '../components/ui/ServiceCard'

const services = [
  {
    id: 1,
    title: "IT Solutions",
    description: "Comprehensive IT solutions designed to address your specific business challenges and drive growth.",
    icon: <FaServer />,
    features: [
      "IT infrastructure assessment and planning",
      "Hardware and software procurement",
      "Network design and implementation",
      "System integration",
      "IT strategy consulting"
    ]
  },
  {
    id: 2,
    title: "Solution Implementation",
    description: "Expert implementation of IT solutions to ensure smooth integration with your existing systems.",
    icon: <FaNetworkWired />,
    features: [
      "Project planning and management",
      "Solution customization",
      "Data migration and validation",
      "User training and onboarding",
      "Post-implementation support"
    ]
  },
  {
    id: 3,
    title: "Onsite and Remote Support",
    description: "Reliable technical support services available both onsite and remotely to address your IT issues.",
    icon: <FaUserCog />,
    features: [
      "24/7 helpdesk support",
      "Remote troubleshooting",
      "Onsite technical assistance",
      "System maintenance and updates",
      "Performance monitoring"
    ]
  },
  {
    id: 4,
    title: "Annual Maintenance Contract",
    description: "Comprehensive AMC services to keep your IT infrastructure running smoothly and efficiently.",
    icon: <FaTools />,
    features: [
      "Regular preventive maintenance",
      "Priority response for issues",
      "Scheduled system updates",
      "Performance optimization",
      "Hardware maintenance and repairs"
    ]
  },
  {
    id: 5,
    title: "Tally Customization",
    description: "Custom Tally solutions tailored to meet your specific accounting and business management needs.",
    icon: <FaLaptopCode />,
    features: [
      "Custom report development",
      "Process automation",
      "Integration with other systems",
      "User interface customization",
      "Data migration and conversion"
    ]
  },
  {
    id: 6,
    title: "Tally Add-ons",
    description: "Powerful add-ons to extend the functionality of your Tally software and enhance productivity.",
    icon: <FaShieldAlt />,
    features: [
      "Advanced reporting modules",
      "Industry-specific features",
      "E-commerce integration",
      "Multi-location management",
      "Custom workflow automation"
    ]
  }
]

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - PrernaInfotech</title>
        <meta name="description" content="Explore our comprehensive range of IT services including IT solutions, implementation, support, maintenance, and Tally customization." />
      </Helmet>
      
      
      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Our Service Offerings" 
            subtitle="Explore our comprehensive range of IT services tailored for your business needs"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Services */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          id={service.title.toLowerCase().replace(/\s+/g, '-')}
          className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {index % 2 === 0 ? (
                <>
                  {/* Blue box - Hidden on small screens, visible on large screens */}
                  <motion.div
                    className="hidden lg:block"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-primary-500 text-white p-8 rounded-lg shadow-lg flex items-center justify-center" style={{ height: '300px' }}>
                      <div className="text-center">
                        {service.icon && <div className="text-6xl mb-4">{service.icon}</div>}
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Icon displayed inline on small screens */}
                    <div className="flex items-center mb-4 lg:hidden">
                      <div className="text-primary-500 text-xl sm:text-2xl mr-2 sm:mr-3">
                        {service.icon}
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    
                    {/* Title for large screens */}
                    <div className="hidden lg:block">
                      <SectionTitle 
                        title={service.title}
                      />
                    </div>
                    
                    <motion.p
                      className="text-gray-600 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {service.description}
                    </motion.p>
                    
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold mb-4">What we offer:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Icon displayed inline on small screens */}
                    <div className="flex items-center mb-4 lg:hidden">
                      <div className="text-primary-500 text-3xl mr-3">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    
                    {/* Title for large screens */}
                    <div className="hidden lg:block">
                      <SectionTitle 
                        title={service.title}
                      />
                    </div>
                    
                    <motion.p
                      className="text-gray-600 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {service.description}
                    </motion.p>
                    
                    <motion.div
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold mb-4">What we offer:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                  
                  {/* Blue box - Hidden on small screens, visible on large screens */}
                  <motion.div
                    className="hidden lg:block"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-primary-500 text-white p-8 rounded-lg shadow-lg flex items-center justify-center" style={{ height: '300px' }}>
                      <div className="text-center">
                        {service.icon && <div className="text-6xl mb-4">{service.icon}</div>}
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
      
      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Enhance Your IT Infrastructure?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact us today to discuss your IT needs and discover how our services can benefit your business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services