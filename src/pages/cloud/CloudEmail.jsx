import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { 
  Mail, 
  Check, 
  ArrowRight, 
  Shield,
  Clock,
  Users,
  Paperclip,
  MessageCircle,
  Settings,
  Star,
  Crown,
  Rocket,
  Filter,
  Smartphone,
  Calendar,
  Headphones,
  Lock,
  Archive
} from 'lucide-react'
import ContactForm from '../../components/ui/ContactForm'

const CloudEmail = () => {
  const [showContactForm, setShowContactForm] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const features = [
    { icon: <Mail className="w-5 h-5" />, text: "Custom domain email hosting" },
    { icon: <Filter className="w-5 h-5" />, text: "Advanced spam filtering" },
    { icon: <Archive className="w-5 h-5" />, text: "Large storage capacity" },
    { icon: <Smartphone className="w-5 h-5" />, text: "Mobile device synchronization" },
    { icon: <Calendar className="w-5 h-5" />, text: "Calendar and contacts integration" },
    { icon: <Headphones className="w-5 h-5" />, text: "24/7 technical support" },
  ]

  const facilities = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Access Mail",
      description: "Seamless email access across all devices"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "99.9% Uptime SLA",
      description: "Guaranteed reliability and availability"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Common Address Book",
      description: "Shared contacts across your organization"
    },
    {
      icon: <Paperclip className="w-8 h-8" />,
      title: "Attach Files up to 25MB",
      description: "Send large files without restrictions"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat Support",
      description: "Real-time assistance when needed"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Centralized Administrator Support",
      description: "Complete administrative control panel"
    }
  ]

  const pricingPlans = [
    {
      name: "Basic",
      icon: <Star className="w-8 h-8" />,
      gradient: "from-blue-400 to-blue-600",
      features: [
        "5GB Storage",
        "Custom Domain",
        "Basic Spam Filter",
        "Mobile Sync",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Advanced",
      icon: <Crown className="w-8 h-8" />,
      gradient: "from-purple-500 to-purple-700",
      features: [
        "25GB Storage",
        "Advanced Spam Filter",
        "Calendar Integration",
        "Priority Support",
        "File Attachments 25MB",
        "Address Book Sharing"
      ],
      popular: true
    },
    {
      name: "Premium",
      icon: <Rocket className="w-8 h-8" />,
      gradient: "from-orange-400 to-red-600",
      features: [
        "Unlimited Storage",
        "Enterprise Security",
        "99.9% Uptime SLA",
        "24/7 Live Chat",
        "Admin Dashboard",
        "Auto Backup & Archive",
        "Multi-domain Support"
      ],
      popular: false
    }
  ]

  const handleChoosePlan = (planName) => {
    setSelectedPlan(planName)
    setShowContactForm(true)
  }

  return (
    <>
      <Helmet>
        <title>Cloud Email Solutions - TechSolutions</title>
        <meta name="description" content="Professional cloud email hosting solutions for businesses with custom domain support, spam filtering, and advanced security features." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
       

        {/* Features Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-500 to-purple-700 text-white p-6 md:p-8 rounded-xl shadow-2xl flex items-center justify-center min-h-[250px] md:min-h-[300px] transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <Mail className="w-16 h-16 md:w-20 md:h-20 mb-4 mx-auto" />
                    <h3 className="text-xl md:text-2xl font-bold">Professional Email Hosting</h3>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Enterprise Email Solutions
                  </h2>
                  <p className="text-lg text-gray-600">
                    Secure and reliable email hosting for your business
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="text-blue-500 mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        {feature.icon}
                      </div>
                      <span className="text-sm md:text-base text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleChoosePlan('Learn More')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Key Facilities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need for professional email management
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {facility.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">
                    {facility.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Choose Your Plan
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select the perfect email solution for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105 ${
                    plan.popular ? 'ring-4 ring-purple-500 lg:scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-purple-500 text-white text-center py-3 text-sm font-semibold">
                      ⭐ Most Popular
                    </div>
                  )}
                  
                  <div className={`bg-gradient-to-r ${plan.gradient} p-6 md:p-8 text-white ${plan.popular ? 'pt-12' : ''}`}>
                    <div className="text-center">
                      <div className="mb-4">
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                        <span className="text-lg ml-1 opacity-80">{plan.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="text-green-500 mt-1 mr-3 flex-shrink-0 w-5 h-5" />
                          <span className="text-sm md:text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button 
                      onClick={() => handleChoosePlan(plan.name)}
                      className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular 
                          ? 'bg-purple-500 text-white hover:bg-purple-600 shadow-lg' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      Choose {plan.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of businesses that trust our cloud email solutions
              </p>
              <button 
                onClick={() => handleChoosePlan('Free Trial')}
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Contact Form Modal */}
        <ContactForm 
          isOpen={showContactForm}
          onClose={() => setShowContactForm(false)}
          planName={selectedPlan}
          serviceName="Cloud Email"
        />

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
          
          .animate-fade-in-delay {
            animation: fade-in 0.6s ease-out 0.3s both;
          }
        `}</style>
      </div>
    </>
  )
}

export default CloudEmail