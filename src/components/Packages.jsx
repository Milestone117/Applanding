import { FaLaptopCode, FaRocket, FaStar, FaCrown } from 'react-icons/fa'
import { useState } from 'react'
import ContactModal from './ContactModal'

const PackageCard = ({ title, price, icon: Icon, features, highlight }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div 
        data-aos="fade-up"
        className={`package-card relative p-8 rounded-2xl ${
          highlight 
            ? 'bg-gradient-to-br from-primary to-secondary text-white' 
            : 'bg-white'
        } shadow-lg hover:shadow-2xl transition-all duration-500`}
      >
        <div className="relative z-10">
          <div className="text-center mb-8">
            <Icon className={`mx-auto text-5xl mb-4 ${
              highlight ? 'text-white' : 'text-primary'
            } transition-transform duration-500 transform group-hover:scale-110`} />
            <h3 className={`text-2xl font-display font-bold mb-2 ${
              highlight ? 'text-white' : 'text-gray-800'
            }`}>
              {title}
            </h3>
            <p className={`text-4xl font-bold font-display ${
              highlight ? 'text-white' : 'text-gray-900'
            }`}>
              ${price}
            </p>
          </div>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className={`flex items-center ${
                highlight ? 'text-white/90' : 'text-gray-600'
              }`}>
                <svg 
                  className={`w-5 h-5 mr-2 ${
                    highlight ? 'text-white' : 'text-primary'
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button 
              onClick={openModal}
              className={`w-full py-4 rounded-full font-bold ${
                highlight 
                  ? 'bg-white text-primary hover:bg-gray-100' 
                  : 'bg-primary text-white hover:bg-secondary'
              } transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              Choose Plan
            </button>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen}
        closeModal={closeModal}
        packageDetails={{
          title,
          price,
          features
        }}
      />
    </>
  )
}

const Packages = ({ id }) => {
  const packages = [
    {
      title: "Development-Only",
      price: 249,
      icon: FaLaptopCode,
      features: [
        "Expert App Development",
        "Intuitive UI/UX Design",
        "Rock-Solid Core Development",
        "Complete Source Code",
        "Documentation"
      ]
    },
    {
      title: "Starter Package",
      price: 349,
      icon: FaRocket,
      features: [
        "Essential App Development",
        "Clean UI/UX Design",
        "Launch Ready Publishing",
        "Store Account Setup",
        "30 Days Support"
      ]
    },
    {
      title: "Pro Package",
      price: 499,
      icon: FaStar,
      highlight: true,
      features: [
        "Professional Development",
        "Polished UI/UX Design",
        "Business-Class Publishing",
        "Admin Dashboard",
        "90 Days Priority Support"
      ]
    },
    {
      title: "Enterprise",
      price: 699,
      icon: FaCrown,
      features: [
        "Premium Development",
        "Custom UI/UX Design",
        "Executive Publishing Suite",
        "Advanced Admin Center",
        "12 Months VIP Support"
      ]
    }
  ]

  return (
    <section id={id} className="w-full py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 font-display" data-aos="fade-up">
          Choose Your Package
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Select the perfect package that suits your needs and budget
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <PackageCard 
              key={index} 
              {...pkg} 
              data-aos="fade-up" 
              data-aos-delay={index * 100} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages 