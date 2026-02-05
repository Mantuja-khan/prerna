import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/ui/SectionTitle'
import manoj_sir from "../assets/manojsir.jpg"
import aboutus from "../assets/about_us.jpg"
import { FaUsers, FaBriefcase, FaHandshake, FaLightbulb } from 'react-icons/fa'

const About = () => {
  const clients = [
    "TechCorp International",
    "Global Finance Ltd",
    "Innovate Manufacturing",
    "EduSmart University",
    "HealthPlus Hospitals",
    "RetailPro Chains",
    "LogiTech Shipping",
    "AgriSmart Solutions"
  ]
  
  const team = [
    {
      name: "Mr. Manoj Khambbra",
      position: "Owner & CEO",
      image: manoj_sir,
      description: "With over 15 years of experience in IT solutions, Mr Manoj Khambbra leads our company with vision and innovation."
    },
  ]
  
  return (
    <>
      <Helmet>
        <title>About Us - PrernaInfotech</title>
        <meta name="description" content="Learn about TechSolutions - who we are, our mission, our clients, and our team." />
      </Helmet>
      
      {/* Who We Are */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={aboutus} 
                alt="Our Team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <div className="px-4 sm:px-0">
              <SectionTitle 
                title="Who We Are" 
                subtitle="Your trusted technology partner since 2010"
              />
              
              <motion.p
                className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                TechSolutions is a leading provider of innovative IT solutions for businesses of all sizes. With over a decade of experience, we've helped hundreds of clients transform their operations through technology.
              </motion.p>
              
              <motion.p
                className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Our team of dedicated professionals brings together expertise in IT infrastructure, cloud computing, software development, and business process optimization. We're committed to delivering solutions that address your specific business challenges and drive growth.
              </motion.p>
              
              <motion.div
                className="grid grid-cols-2 gap-2 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl sm:text-3xl font-bold text-primary-600 mb-1 sm:mb-2">10+</h3>
                  <p className="text-gray-600 text-xs sm:text-base">Years of Experience</p>
                </div>
                <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl sm:text-3xl font-bold text-primary-600 mb-1 sm:mb-2">500+</h3>
                  <p className="text-gray-600 text-xs sm:text-base">Clients Served</p>
                </div>
                <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl sm:text-3xl font-bold text-primary-600 mb-1 sm:mb-2">45+</h3>
                  <p className="text-gray-600 text-xs sm:text-base">Team Members</p>
                </div>
                <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-xl sm:text-3xl font-bold text-primary-600 mb-1 sm:mb-2">850+</h3>
                  <p className="text-gray-600 text-xs sm:text-base">Projects Completed</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="The Founder Of Prernainfotech" 
            centered
          />
          
          {/* Centered founder card container */}
          <div className="flex justify-center mt-8 sm:mt-12">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="card p-4 sm:p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="rounded-full w-full h-full object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3 text-sm sm:text-base">{member.position}</p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section bg-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide everything we do"
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
            {[
              { 
                icon: <FaUsers className="text-2xl sm:text-3xl lg:text-4xl text-primary-500 mb-2 sm:mb-4" />,
                title: "Client Focus",
                description: "We put our clients at the center of everything we do, focusing on their unique needs and challenges."
              },
              {
                icon: <FaLightbulb className="text-2xl sm:text-3xl lg:text-4xl text-primary-500 mb-2 sm:mb-4" />,
                title: "Innovation",
                description: "We continuously seek new and better ways to solve problems and deliver value to our clients."
              },
              {
                icon: <FaHandshake className="text-2xl sm:text-3xl lg:text-4xl text-primary-500 mb-2 sm:mb-4" />,
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical conduct in all our business relationships."
              },
              {
                icon: <FaBriefcase className="text-2xl sm:text-3xl lg:text-4xl text-primary-500 mb-2 sm:mb-4" />,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our work, from customer service to technical delivery."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="card p-4 sm:p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
     
    </>
  )
}

export default About