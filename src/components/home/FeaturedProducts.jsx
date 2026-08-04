import SectionTitle from '../ui/SectionTitle'
import ProductCard from '../ui/ProductCard'
import tally_img from '../../assets/tally_images.jpeg'
import busy_img from '../../assets/busy_sales_hero.png'

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
    title: "Busy Accounting Software",
    description: "Complete business accounting & inventory management solution for micro, small and medium enterprises.",
    image: busy_img,
    features: [
      "Multi-Location Inventory Management",
      "GST Billing & E-Way Bill Generation",
      "Order Processing & Quotation System",
      "Invoicing with Barcode Support",
      "Financial Audit & MIS Reports"
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