import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaDatabase, FaLaptopCode, FaServer, FaArrowRight, FaCheck } from 'react-icons/fa'
import SectionTitle from '../components/ui/SectionTitle'

const cloudServices = [
  {
    id: 1,
    title: "Cloud Email",
    description: "Secure, reliable email solutions for your business with advanced features and integrations.",
    icon: <FaEnvelope className="text-5xl text-primary-500 mb-4" />,
    features: [
      "Business email with custom domain",
      "Advanced spam filtering and security",
      "Calendar integration and scheduling",
      "Mobile access and synchronization",
      "Email archiving and retention policies"
    ]
  },
  {
    id: 2,
    title: "Cloud Backup",
    description: "Automated backup solutions to protect your critical business data from loss or corruption.",
    icon: <FaDatabase className="text-5xl text-primary-500 mb-4" />,
    features: [
      "Automated scheduled backups",
      "End-to-end encryption",
      "Rapid recovery options",
      "Multi-location redundancy",
      "Compliance with data protection regulations"
    ]
  },
  {
    id: 3,
    title: "Tally on Cloud Hosting",
    description: "High-speed remote cloud hosting for Tally Prime software with 24/7 accessibility.",
    icon: <FaLaptopCode className="text-5xl text-primary-500 mb-4" />,
    link: "/products",
    features: [
      "Remote access on Windows, Mac, Android & iOS",
      "Automated daily offsite data backups",
      "High-speed RDP server performance",
      "End-to-end SSL data encryption",
      "Multi-user concurrent access & printing"
    ]
  },
  {
    id: 4,
    title: "Campus Server (ERP)",
    description: "Comprehensive ERP solutions for educational institutions and corporate campuses.",
    icon: <FaServer className="text-5xl text-primary-500 mb-4" />,
    features: [
      "Student/employee management",
      "Attendance and scheduling",
      "Resource allocation",
      "Financial management",
      "Performance analytics and reporting"
    ]
  }
]

const Cloud = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Solutions - TechSolutions</title>
        <meta name="description" content="Explore our cloud solutions including cloud email, cloud backup, Tally on cloud hosting, and campus server (ERP) services." />
      </Helmet>
      
      {/* Hero Section */}
      {/* <section className="relative py-24 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Cloud Solutions" 
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
              Cloud Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform your business with our powerful cloud-based solutions designed for security, scalability, and performance.
            </motion.p>
          </div>
        </div>
      </section> */}
      
      {/* Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cloud Computing" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            
            <div>
              <SectionTitle 
                title="Powerful Cloud Solutions" 
                subtitle="Empowering your business with modern cloud technology"
              />
              
              <motion.p
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Our cloud solutions provide the flexibility, security, and scalability needed to support your business in today's digital environment. From cloud email and data backup to Tally on cloud hosting and enterprise resource planning, we offer comprehensive cloud services tailored to your specific needs.
              </motion.p>
              
              <motion.p
                className="text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                With our cloud solutions, you can reduce IT costs, improve collaboration, enhance security, and access your data from anywhere, at any time, on any device.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="#cloud-services" className="btn btn-primary">
                  Explore Cloud Services <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cloud Services */}
      <section id="cloud-services" className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Our Cloud Services" 
            subtitle="Comprehensive cloud solutions designed for modern businesses"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="card p-8 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-center">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center mt-auto">
                  <Link 
                    to={service.link || `/cloud/${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="btn btn-outline"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Benefits of Cloud Solutions" 
            subtitle="Why businesses are moving to the cloud"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Cost Efficiency",
                description: "Reduce capital expenses and operational costs by eliminating the need for physical hardware and maintenance.",
                icon: "💰"
              },
              {
                title: "Scalability",
                description: "Easily scale resources up or down based on your business needs without significant investments.",
                icon: "📈"
              },
              {
                title: "Accessibility",
                description: "Access your data and applications from anywhere, at any time, on any device with internet connectivity.",
                icon: "🌐"
              },
              {
                title: "Disaster Recovery",
                description: "Implement robust backup and recovery solutions to protect your data from loss or corruption.",
                icon: "🛡️"
              },
              {
                title: "Security",
                description: "Benefit from enterprise-grade security measures and compliance with industry standards.",
                icon: "🔒"
              },
              {
                title: "Collaboration",
                description: "Enhance team collaboration with real-time document sharing, editing, and communication tools.",
                icon: "👥"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

    </>
  )
}

export default Cloud