import SectionTitle from '../ui/SectionTitle'
import ProductCard from '../ui/ProductCard'

const products = [
  {
    id: 1,
    title: "Tally",
    description: "Powerful accounting and business management software to streamline your operations.",
    image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Comprehensive accounting solution",
      "Inventory management",
      "Payroll and compliance",
      "Customizable reports",
      "GST compliance"
    ],
    link: "/products"
  },
  {
    id: 2,
    title: "BizCloudConnect",
    description: "Cloud-based business management platform for the modern workplace.",
    image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: [
      "Centralized data management",
      "Real-time collaboration",
      "Secure file storage",
      "Seamless integration with other tools",
      "Mobile accessibility"
    ],
    link: "/products"
  }
]

const FeaturedProducts = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle 
          title="Our Products" 
          subtitle="Discover our flagship products designed to boost your business efficiency"
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