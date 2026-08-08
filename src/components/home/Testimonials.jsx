import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import profile from "../../assets/user_profile.jpg"

import SectionTitle from '../ui/SectionTitle'
import TestimonialCard from '../ui/TestimonialCard'

const testimonials = [
  {
    id: 1,
    name: "Mr. Nikhil Singh",
    position: "ADVOCATE",
    company: "Nikhil Associates",
    testimonial: "The team at TechSolutions transformed our IT infrastructure. Their expertise and professionalism are unmatched. Highly recommended!",
    image: profile,
  },
  {
    id: 2,
    name: "Mr. Sukhbir Singh",
    position: "Manager",
    company: "DS Engineering",
    testimonial: "Their cloud solutions have significantly improved our operational efficiency. The transition was smooth and the ongoing support is excellent.",
    image: profile
  },
  {
    id: 3,
    name: "Mr. Sidharth Singh",
    position: "Finance Director",
    company: "Sidharth Association ",
    testimonial: "The Tally customization provided by TechSolutions has streamlined our accounting processes. Their team understands our business needs perfectly.",
    image: profile
    },
  {
    id: 4,
    name: "Mr. Sanjay kumar",
    position: "Operations Manager",
    company: "Multi Computer",
    testimonial: "We've been using their technical support services for three years now, and the reliability and response time for support has been outstanding.",
    image: profile
  }
]

const Testimonials = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="Hear what our clients have to say about our services"
          centered
        />
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="py-8">
              <TestimonialCard
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials