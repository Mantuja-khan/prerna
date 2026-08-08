import SectionTitle from '../ui/SectionTitle'
import ProductCard from '../ui/ProductCard'
import tally_img from '../../assets/tally_images.jpeg'
import cloud_img from '../../assets/cloud_services_hero.png'

const products = [
  {
    id: 1,
    title: "Tally Prime",
    description: "Powerful accounting, GST compliance, and business management software to streamline your financial operations.",
    image: tally_img,
    features: [
      "GST Return Filing & E-Invoicing",
      "Real-time Inventory & Stock Tracking",
      "Payroll & Employee Compliance",
      "Comprehensive Financial Reports",
      "Multi-currency & Multi-company Support"
    ],
    link: "/products"
  },
  {
    id: 2,
    title: "Tally on Cloud",
    description: "Secure, high-speed remote cloud hosting to access Tally Prime anytime, anywhere from any device.",
    image: cloud_img,
    features: [
      "24/7 Remote Access on Mac, Windows & Mobile",
      "Automatic Daily Data Backup & Security",
      "Multi-user Concurrent Work Flexibility",
      "Dedicated High-Speed RDP Performance",
      "Managed SSL & Zero Local Data Risk"
    ],
    link: "/products"
  }
]

const FeaturedProducts = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle 
          title="Our Featured Products" 
          subtitle="Discover our flagship business accounting & management software solutions"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              features={product.features}
              link={product.link}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts