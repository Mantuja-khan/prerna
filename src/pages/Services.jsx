import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaServer, FaNetworkWired, FaUserCog, FaTools, FaLaptopCode, FaShieldAlt, FaWhatsapp } from 'react-icons/fa'
import SectionTitle from '../components/ui/SectionTitle'
import ServiceCard from '../components/ui/ServiceCard'

const services = [
  {
    id: 1,
    title: "Tally Prime Services",
    description: "Complete Tally licensing, TDL customization, data sync, and corporate accounting support.",
    icon: <FaLaptopCode />,
    features: [
      "Tally Prime Silver & Gold Licensing",
      "TSS 1-Year (₹4,500) & 2-Year (₹8,100) Renewals",
      "TDL Customization (Invoices, QR, Reports)",
      "Multi-Company Data Splitting & Repair",
      "Dedicated Technical Support & Maintenance"
    ]
  },
  {
    id: 2,
    title: "Tally on Cloud Services",
    description: "High-speed, secure remote cloud hosting for Tally Prime with 99.9% uptime and automatic backups.",
    icon: <FaTools />,
    features: [
      "24/7 Secure Cloud Hosting for Tally Prime",
      "Multi-User & Remote Desktop (RDP) Setup",
      "Access on Mac, Windows, Android & iOS",
      "Automated Daily Off-site Data Backups",
      "Dedicated Technical & Server Support"
    ]
  },
  {
    id: 3,
    title: "IT Solutions & Infrastructure",
    description: "Comprehensive IT infrastructure setup, hardware procurement, and enterprise networking.",
    icon: <FaServer />,
    features: [
      "Server & Storage Setup",
      "Network Cabling & Firewall Configuration",
      "Hardware Procurement & Maintenance",
      "System Integration & Audit",
      "IT Strategy Consulting"
    ]
  },
  {
    id: 4,
    title: "Solution Implementation",
    description: "Expert deployment of accounting, ERP and IT software tailored to your workflows.",
    icon: <FaNetworkWired />,
    features: [
      "Project Planning & System Setup",
      "Legacy Data Migration to Tally Prime / Cloud",
      "Staff Training & Onboarding",
      "Post-Implementation Quality Audit",
      "Dedicated Technical Support"
    ]
  },
  {
    id: 5,
    title: "Onsite & Remote Technical Support",
    description: "Prompt technical assistance for accounting software, databases, and IT hardware.",
    icon: <FaUserCog />,
    features: [
      "Remote Desktop Quick Help",
      "Onsite Engineer Visits",
      "Scheduled System Updates & Cleanups",
      "Database Health Checks & Backup",
      "Performance Optimization"
    ]
  },
  {
    id: 6,
    title: "System Maintenance & Support Services",
    description: "Comprehensive support and maintenance services to keep your accounting software and IT systems running smoothly.",
    icon: <FaShieldAlt />,
    features: [
      "Preventive System Maintenance",
      "Priority Issue Resolution",
      "Unlimited Technical Call Support",
      "Data Backup Verification",
      "Hardware & Software Repairs"
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
      {/* Top CTA Header Section */}
      <section className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        {/* Dotted Pattern Background Overlay */}
        <div className="absolute inset-0 bg-dotted-pattern opacity-35 pointer-events-none" />
        
        {/* Decorative Dotted Matrix SVG */}
        <div className="absolute top-4 left-6 pointer-events-none opacity-30 hidden sm:block">
          <svg width="110" height="110" fill="none">
            <pattern id="dot-srv-top-1" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="2.5" fill="#38bdf8" />
            </pattern>
            <rect width="110" height="110" fill="url(#dot-srv-top-1)" />
          </svg>
        </div>
        <div className="absolute bottom-4 right-6 pointer-events-none opacity-30 hidden sm:block">
          <svg width="110" height="110" fill="none">
            <pattern id="dot-srv-top-2" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="2.5" fill="#38bdf8" />
            </pattern>
            <rect width="110" height="110" fill="url(#dot-srv-top-2)" />
          </svg>
        </div>

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-3.5 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30 inline-block mb-3"
          >
            End-to-End Enterprise Services
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            Expert IT & Tally Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-8"
          >
            Enhance your operational efficiency with authorized Tally Prime support, TDL customization, cloud deployment, and system maintenance.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              to="/contact" 
              className="px-7 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-full shadow-lg transition-all text-sm"
            >
              Get Expert Assistance
            </Link>
            <a 
              href="https://wa.me/919358853990?text=Hi, I need assistance with your IT & Tally services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-7 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full shadow-lg transition-all text-sm flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg" /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
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
      

    </>
  )
}

export default Services