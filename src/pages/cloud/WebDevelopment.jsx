import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaLaptopCode, 
  FaCheck, 
  FaArrowRight, 
  FaMobile, 
  FaSearch, 
  FaShieldAlt,
  FaRocket,
  FaCode,
  FaPalette,
  FaChartLine,
  FaCog,
  FaStar,
  FaUsers,
  FaAward,
  FaClock
} from 'react-icons/fa'
import SectionTitle from '../../components/ui/SectionTitle'

const WebDevelopment = () => {
  const features = [
    {
      icon: FaPalette,
      title: "Custom Website Design",
      description: "Unique, brand-focused designs that stand out from the competition"
    },
    {
      icon: FaMobile,
      title: "Responsive Layouts",
      description: "Perfect display across all devices - desktop, tablet, and mobile"
    },
    {
      icon: FaSearch,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to boost your search engine rankings"
    },
    {
      icon: FaCog,
      title: "Content Management Systems",
      description: "Easy-to-use CMS solutions for effortless content updates"
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds for better user experience"
    },
    {
      icon: FaShieldAlt,
      title: "Security Implementation",
      description: "Enterprise-grade security to protect your website and data"
    },
    {
      icon: FaChartLine,
      title: "Analytics Integration",
      description: "Comprehensive tracking and insights for data-driven decisions"
    },
    {
      icon: FaClock,
      title: "Regular Maintenance",
      description: "Ongoing support and updates to keep your site running smoothly"
    }
  ]

  const technologies = [
    { name: "React", color: "bg-blue-500" },
    { name: "Vue.js", color: "bg-green-500" },
    { name: "Angular", color: "bg-red-500" },
    { name: "Node.js", color: "bg-green-600" },
    { name: "Python", color: "bg-yellow-500" },
    { name: "PHP", color: "bg-purple-500" },
    { name: "WordPress", color: "bg-blue-600" },
    { name: "Shopify", color: "bg-green-500" }
  ]

  const stats = [
    { icon: FaUsers, number: "", label: "Client Setisfaction" },
    { icon: FaAward, number: "", label: "Success Rate" },
    { icon: FaCode, number: "", label: "Responive Website" },
    { icon: FaStar, number: "", label: "Best Rating" }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc.",
      text: "Outstanding work! They delivered exactly what we needed and more.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      text: "Professional team with excellent communication throughout the project.",
      rating: 5
    },
    {
      name: "Emily Davis",
      company: "Creative Agency",
      text: "Fast, reliable, and produces high-quality results every time.",
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>Web Development Services - TechSolutions</title>
        <meta name="description" content="Professional web development services including custom design, responsive layouts, and SEO optimization." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Web Development" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-green-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaCode className="mr-2" />
                Professional Web Development
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Web Development Services
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Transform your business with custom web solutions that drive results and engage your audience
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  Get Started <FaArrowRight className="ml-2" />
                </Link>
                
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
                  <FaLaptopCode className="text-6xl mb-4 mx-auto text-white" />
                  <h3 className="text-2xl font-bold text-white mb-2">Custom Web Development</h3>
                  <p className="text-blue-100">Built with latest technologies</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-2xl text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Web Development Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to elevate your online presence and drive business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-xl text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-600">
              Cutting-edge tools and frameworks for modern web development
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`${tech.color} text-white px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                {tech.name}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's turn your vision into reality with our expert web development services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Your Project <FaArrowRight className="ml-2 inline" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default WebDevelopment