import { Helmet } from 'react-helmet'
import HeroSlider from '../components/home/HeroSlider'
import FeaturedServices from '../components/home/FeaturedServices'
import FeaturedProducts from '../components/home/FeaturedProducts'
import StatsSection from '../components/home/StatsSection'
import Testimonials from '../components/home/Testimonials'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PrernaInffotech - IT Services & Solutions</title>
        <meta name="description" content="TechSolutions provides comprehensive IT services, cloud solutions, and software products for businesses of all sizes." />
      </Helmet>
      
      <HeroSlider />
      <FeaturedServices />
      <FeaturedProducts />
      <StatsSection />
      <Testimonials />
    </>
  )
}

export default Home