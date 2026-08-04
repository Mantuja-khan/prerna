import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight, FaTimes, FaWhatsapp, FaPhone, FaFileAlt, FaCreditCard, FaCloudUploadAlt, FaShieldAlt, FaRupeeSign, FaTag, FaServer, FaUserCheck, FaTools } from 'react-icons/fa'
import { useState } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import busy_img from "../assets/busy_sales_hero.png"
import tally_img from "../assets/tally_sales_hero.png"

const Products = () => {
  const [showContactPopup, setShowContactPopup] = useState(false)
  const [activeTab, setActiveTab] = useState('tally') // 'tally' | 'busy' | 'services'
  
  const tallyFeatures = [
    "Complete accounting solution with 100% GST & E-Invoicing compliance",
    "Real-time inventory management with multi-godown tracking",
    "Payroll management, ESI/PF & statutory compliance",
    "Banking integration, auto bank reconciliation & cheque printing",
    "Customizable MIS reports, audit trail (Edit Log) & financial dashboards"
  ]

  const busyFeatures = [
    "Comprehensive financial accounting with multi-currency support",
    "Multi-location inventory with batch-wise & serial number tracking",
    "GST billing, E-Way Bill generation & GSTR 1/3B return filing",
    "Configurable invoice printing, barcode scanning & quotation system",
    "Audit trail, user access controls & automated email/SMS alerts"
  ]

  // Pricing Data
  const tallyPricing = [
    {
      name: "TallyPrime Silver",
      type: "Single User",
      price: "₹22,500",
      tax: "+ 18% GST (One-Time)",
      renewal: "TSS Renewal: ₹4,500/year",
      popular: false,
      description: "Ideal for small businesses and single PC desktop accounting.",
      features: [
        "1 Standalone PC License",
        "Full Accounting & GST",
        "E-Invoicing & E-Way Bill",
        "Inventory & Payroll",
        "1 Year Free TSS Updates"
      ]
    },
    {
      name: "TallyPrime Gold",
      type: "Multi-User",
      price: "₹67,500",
      tax: "+ 18% GST (One-Time)",
      renewal: "TSS Renewal: ₹13,500/year",
      popular: true,
      description: "Perfect for growing businesses requiring multi-PC LAN access.",
      features: [
        "Unlimited PCs on Local LAN",
        "Concurrent Multi-User Access",
        "Advanced Security Controls",
        "Multi-Company Management",
        "1 Year Free TSS Updates"
      ]
    },
    {
      name: "TSS Renewal (Silver & Gold)",
      type: "Subscription Renewal",
      price: "₹4,500",
      tax: "+ 18% GST (1-Yr Silver)",
      renewal: "2-Yr Silver: ₹8,100 + GST (Save 10%)",
      popular: false,
      description: "TSS subscription renewal for Tally Prime software updates & connected services.",
      features: [
        "1 Year TSS Silver: ₹4,500 + GST",
        "2 Year TSS Silver: ₹8,100 + GST",
        "1 Year TSS Gold: ₹13,500 + GST",
        "2 Year TSS Gold: ₹24,300 + GST",
        "Latest Features & Compliance"
      ]
    },
    {
      name: "Tally on Cloud",
      type: "Remote Access",
      price: "₹600",
      tax: "/ User / Month",
      renewal: "Annual: ₹6,000/user/year",
      popular: false,
      description: "Access Tally anytime, anywhere on Mac, Windows, Mobile & Web.",
      features: [
        "24/7 Secure Cloud Hosting",
        "Works on Mac, PC, Tablet",
        "Automatic Daily Data Backup",
        "High Speed RDP Access",
        "Managed SSL Encryption"
      ]
    }
  ]

  const busyPricing = [
    {
      name: "Busy Basic Edition",
      type: "Single / Multi User",
      price: "₹9,000",
      tax: "+ 18% GST (Single User)",
      renewal: "Multi-User: ₹22,500 + GST",
      popular: false,
      description: "Basic accounting and invoicing for micro enterprises.",
      features: [
        "Invoicing & Billing",
        "Financial Accounting",
        "GST Compliance",
        "Standard MIS Reports"
      ]
    },
    {
      name: "Busy Standard Edition",
      type: "Single / Multi User",
      price: "₹15,000",
      tax: "+ 18% GST (Single User)",
      renewal: "Multi-User: ₹37,500 + GST",
      popular: true,
      description: "Complete accounting + inventory management for retail & trade.",
      features: [
        "Multi-Location Inventory",
        "Order & Quotation Mgmt",
        "E-Way Bill & E-Invoicing",
        "Discount & Scheme Engine"
      ]
    },
    {
      name: "Busy Enterprise Edition",
      type: "Single / Multi User",
      price: "₹21,000",
      tax: "+ 18% GST (Single User)",
      renewal: "Multi-User: ₹52,500 + GST",
      popular: false,
      description: "Advanced enterprise controls, workflow & audit trails.",
      features: [
        "Voucher Approval System",
        "Configurable Audit Trail",
        "Auto Web & Mobile Alerts",
        "Payroll & HR Management"
      ]
    }
  ]

  const servicesPricing = [
    {
      title: "Tally & Busy Customization (TDL)",
      price: "Starting ₹2,500+",
      desc: "Custom invoice formats, barcode integration, custom report development, and workflow automation."
    },
    {
      title: "Data Migration & Recovery",
      price: "Starting ₹3,000+",
      desc: "Data splitting, corrupted data recovery, legacy software data migration to Tally / Busy."
    },
    {
      title: "Annual Maintenance Contract (AMC)",
      price: "₹6,000 - ₹15,000/yr",
      desc: "Unlimited telephone, remote desktop & on-site technical support, data health checkups."
    },
    {
      title: "Corporate Training & Implementation",
      price: "₹5,000 / Session",
      desc: "Hands-on staff training for Tally Prime & Busy accounting, GST filing, and inventory setups."
    }
  ]

  const contacts = {
    whatsapp: [
      { name: "Sales Manager", number: "+919358853990" },
      { name: "Technical Support", number: "+919116040232" }
    ],
    phone: [
      { name: "Main Office", number: "+919950726232" }
    ]
  }

  return (
    <>
      <Helmet>
        <title>Products & Pricing - PrernaInfotech</title>
        <meta name="description" content="Explore Tally Prime & Busy Accounting Software sales, licenses, cloud hosting, customization, and official price list." />
      </Helmet>

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-slate-900 to-indigo-950/80"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-3.5 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30 inline-block mb-3"
          >
            Authorized Sales & Service Partner
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold mb-4"
          >
            Tally & Busy Business Software Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto"
          >
            Get original software licenses, implementation, TDL customization, cloud hosting, and expert maintenance services.
          </motion.p>
        </div>
      </section>

      {/* Tally Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center"
            >
              <div className="bg-slate-900/90 p-8 rounded-2xl border border-slate-800 shadow-xl w-full flex items-center justify-center min-h-[260px]">
                <img 
                  src={tally_img} 
                  alt="Tally Software" 
                  className="w-full max-h-[220px] object-contain drop-shadow-md"
                />
              </div>
            </motion.div>
            
            <div>
              <SectionTitle 
                title="Tally Prime Software & Services" 
                subtitle="Complete Business Accounting & Compliance Solution"
              />
              
              <motion.p
                className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Tally Prime is India's leading business accounting software designed to manage accounting, inventory, GST filing, e-invoicing, and payroll. We provide genuine licenses, TDL customization, and dedicated technical support.
              </motion.p>
              
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">Key Features:</h3>
                <ul className="grid grid-cols-1 gap-1.5">
                  {tallyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center px-3 py-1.5 bg-slate-50 rounded-md hover:bg-slate-100 transition-colors">
                      <FaCheck className="text-sky-600 mr-2.5 flex-shrink-0 text-xs" />
                      <span className="text-gray-700 text-xs md:text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Action Buttons for Tally */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => window.open('tel:+919982686232', '_self')}
                  className="flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors shadow-md text-sm font-semibold"
                >
                  <FaPhone className="mr-2 text-xs" />
                  Call for Tally Quote
                </button>
                <button
                  onClick={() => window.open('https://wa.me/919982686232?text=Hi, I want to inquire about Tally Prime Software & Services.', '_blank')}
                  className="flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors shadow-md text-sm font-semibold"
                >
                  <FaWhatsapp className="mr-2 text-sm" />
                  WhatsApp Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Busy Section */}
      <section className="section bg-slate-50 border-y border-slate-200">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle 
                title="Busy Accounting Software & Services" 
                subtitle="Integrated Business & Inventory Management Solution"
              />
              
              <motion.p
                className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Busy Accounting Software is an easy-to-use yet powerful business management software for MSMEs. It covers multi-company accounting, advanced inventory, batch tracking, invoicing, GST compliance, and barcode printing.
              </motion.p>
              
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">Key Features:</h3>
                <ul className="grid grid-cols-1 gap-1.5">
                  {busyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center px-3 py-1.5 bg-white rounded-md hover:bg-blue-50 transition-colors border border-slate-100 shadow-xs">
                      <FaCheck className="text-blue-600 mr-2.5 flex-shrink-0 text-xs" />
                      <span className="text-gray-700 text-xs md:text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Action Buttons for Busy */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => window.open('tel:+919358853990', '_self')}
                  className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md text-sm font-semibold"
                >
                  <FaPhone className="mr-2 text-xs" />
                  Call for Busy Quote
                </button>
                <button
                  onClick={() => window.open('https://wa.me/919358853990?text=Hi, I want to inquire about Busy Accounting Software & Services.', '_blank')}
                  className="flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors shadow-md text-sm font-semibold"
                >
                  <FaWhatsapp className="mr-2 text-sm" />
                  WhatsApp Sales
                </button>
              </div>
            </div>
            
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-900/90 p-8 rounded-2xl border border-slate-800 shadow-xl w-full flex items-center justify-center min-h-[260px]">
                <img 
                  src={busy_img} 
                  alt="Busy Accounting Software" 
                  className="w-full max-h-[220px] object-contain drop-shadow-md"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Official Price List Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Software & Services Price List" 
            subtitle="Transparent pricing for Tally Prime, Busy Software licenses, cloud hosting, and AMC services"
            centered
          />

          {/* Pricing Category Tabs */}
          <div className="flex justify-center mb-10">
            <div className="bg-slate-100 p-1.5 rounded-full border border-slate-200 inline-flex gap-2">
              <button
                onClick={() => setActiveTab('tally')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'tally' 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tally Prime Pricing
              </button>
              <button
                onClick={() => setActiveTab('busy')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'busy' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Busy Software Pricing
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'services' 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Services & AMC List
              </button>
            </div>
          </div>

          {/* Tally Pricing Cards */}
          {activeTab === 'tally' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tallyPricing.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative ${
                    item.popular 
                      ? 'border-primary-500 shadow-xl bg-slate-900 text-white scale-[1.02]' 
                      : 'border-slate-200 shadow-sm bg-white text-slate-800 hover:shadow-md'
                  }`}
                >
                  {item.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${item.popular ? 'text-sky-400' : 'text-primary-600'}`}>
                      {item.type}
                    </span>
                    <h3 className="text-xl font-extrabold mt-1 mb-2">{item.name}</h3>
                    <p className={`text-xs mb-4 ${item.popular ? 'text-slate-300' : 'text-slate-500'}`}>{item.description}</p>
                    
                    <div className="my-4 pb-4 border-b border-slate-200/40">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black">{item.price}</span>
                        <span className={`text-xs font-medium ${item.popular ? 'text-slate-300' : 'text-slate-500'}`}>{item.tax}</span>
                      </div>
                      <p className={`text-xs mt-1 font-medium ${item.popular ? 'text-sky-300' : 'text-emerald-600'}`}>{item.renewal}</p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {item.features.map((feat, i) => (
                        <li key={i} className="flex items-center text-xs gap-2">
                          <FaCheck className={`text-xs ${item.popular ? 'text-sky-400' : 'text-emerald-500'}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setShowContactPopup(true)}
                    className={`w-full py-2.5 rounded-full text-xs font-semibold transition-all ${
                      item.popular 
                        ? 'bg-primary-500 hover:bg-primary-400 text-white shadow-md' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    Inquire License
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {/* Busy Pricing Cards */}
          {activeTab === 'busy' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {busyPricing.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative ${
                    item.popular 
                      ? 'border-blue-500 shadow-xl bg-slate-900 text-white scale-[1.02]' 
                      : 'border-slate-200 shadow-sm bg-white text-slate-800 hover:shadow-md'
                  }`}
                >
                  {item.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
                      Recommended
                    </span>
                  )}
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${item.popular ? 'text-sky-400' : 'text-blue-600'}`}>
                      {item.type}
                    </span>
                    <h3 className="text-xl font-extrabold mt-1 mb-2">{item.name}</h3>
                    <p className={`text-xs mb-4 ${item.popular ? 'text-slate-300' : 'text-slate-500'}`}>{item.description}</p>
                    
                    <div className="my-4 pb-4 border-b border-slate-200/40">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black">{item.price}</span>
                        <span className={`text-xs font-medium ${item.popular ? 'text-slate-300' : 'text-slate-500'}`}>{item.tax}</span>
                      </div>
                      <p className={`text-xs mt-1 font-medium ${item.popular ? 'text-sky-300' : 'text-blue-600'}`}>{item.renewal}</p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {item.features.map((feat, i) => (
                        <li key={i} className="flex items-center text-xs gap-2">
                          <FaCheck className={`text-xs ${item.popular ? 'text-sky-400' : 'text-blue-500'}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setShowContactPopup(true)}
                    className={`w-full py-2.5 rounded-full text-xs font-semibold transition-all ${
                      item.popular 
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md' 
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    Get Busy Quote
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {/* Services & AMC List */}
          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {servicesPricing.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <button
                    onClick={() => setShowContactPopup(true)}
                    className="text-xs font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1.5"
                  >
                    Request Service Estimate <FaArrowRight className="text-[10px]" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us & Contact CTA */}
      <section className="section bg-slate-900 text-white">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Need Custom Tally/Busy Customization or Cloud Hosting?</h2>
          <p className="text-slate-300 text-base mb-8">
            Speak directly with our authorized technical engineers to find the exact license, customization, or cloud setup for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setShowContactPopup(true)}
              className="px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-full shadow-lg transition-all"
            >
              Contact Sales Team <FaArrowRight className="inline ml-2 text-xs" />
            </button>
            <button 
              onClick={() => window.open('https://wa.me/919358853990?text=Hi, I need assistance with Tally/Busy Software.', '_blank')}
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full shadow-lg transition-all flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg" /> Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Contact Popup */}
      {showContactPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="flex justify-between items-center p-5 border-b bg-slate-900 text-white rounded-t-2xl">
              <h3 className="text-lg font-bold">Contact Our Sales & Support</h3>
              <button
                onClick={() => setShowContactPopup(false)}
                className="text-slate-400 hover:text-white"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs text-slate-600 text-center">Get instant answers for Tally & Busy licensing, pricing & services:</p>
              
              <div className="space-y-3">
                {contacts.whatsapp.map((contact, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(`https://wa.me/${contact.number.replace(/[^0-9]/g, '')}?text=Hi! I want to inquire about Tally / Busy software.`, '_blank')}
                    className="w-full flex items-center justify-between p-3.5 border border-slate-200 rounded-xl hover:bg-emerald-50 hover:border-emerald-300 transition-all text-left"
                  >
                    <div>
                      <div className="font-semibold text-xs text-slate-800">{contact.name} (WhatsApp)</div>
                      <div className="text-xs text-emerald-600 font-mono">{contact.number}</div>
                    </div>
                    <FaWhatsapp className="text-emerald-600 text-xl" />
                  </button>
                ))}

                {contacts.phone.map((contact, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(`tel:${contact.number}`, '_self')}
                    className="w-full flex items-center justify-between p-3.5 border border-slate-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all text-left"
                  >
                    <div>
                      <div className="font-semibold text-xs text-slate-800">{contact.name} (Phone)</div>
                      <div className="text-xs text-blue-600 font-mono">{contact.number}</div>
                    </div>
                    <FaPhone className="text-blue-600 text-sm" />
                  </button>
                ))}
              </div>
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={() => setShowContactPopup(false)}
                className="w-full py-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Products