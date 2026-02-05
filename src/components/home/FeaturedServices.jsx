import { useState } from 'react'
import { FaServer, FaCloud, FaLaptopCode, FaHeadset, FaCogs, FaShieldAlt, FaArrowRight } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle'
import ServiceCard from '../ui/ServiceCard'

const services = [
  {
    id: 1,
    title: "IT Solutions",
    description: "Comprehensive IT solutions tailored to meet your business needs and challenges.",
    icon: <FaServer />,
    link: "/services"
  },
  {
    id: 2,
    title: "Cloud Services",
    description: "Secure and scalable cloud solutions to modernize your business infrastructure.",
    icon: <FaCloud />,
    link: "/cloud"
  },
  {
    id: 3,
    title: "Web Development",
    description: "Custom website development and design to enhance your online presence.",
    icon: <FaLaptopCode />,
    link: "/services"
  }
]

const FeaturedServices = () => {
  const navigate = useNavigate()
  const isMobile = window.innerWidth < 768
  const visibleServices = isMobile ? services.slice(0, 2) : services

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionTitle 
          title="Our Services" 
          subtitle="Explore our wide range of IT services designed to help your business thrive"
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {visibleServices.map((service, index) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        {isMobile && (
          <div className="mt-8 text-center">
            <Link 
              to="/services" 
              className="btn btn-primary inline-flex items-center"
            >
              Explore All Services <FaArrowRight className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedServices