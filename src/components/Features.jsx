import { 
  FaMobile, 
  FaCode, 
  FaRocket, 
  FaCloud, 
  FaCog, 
  FaShieldAlt, 
  FaChartLine, 
  FaHeadset 
} from 'react-icons/fa'

const Features = ({ id }) => {
  const features = [
    {
      icon: FaMobile,
      title: "UI/UX Design",
      description: "Create stunning, user-friendly interfaces that engage and delight your users. We focus on intuitive navigation and beautiful aesthetics.",
      details: [
        "Custom Interface Design",
        "User Experience Optimization",
        "Responsive Layouts",
        "Interactive Prototypes"
      ]
    },
    {
      icon: FaCode,
      title: "Core Development",
      description: "Build robust and scalable applications using the latest technologies and best practices in mobile development.",
      details: [
        "Native & Cross-platform Development",
        "Clean Code Architecture",
        "Performance Optimization",
        "Regular Updates & Maintenance"
      ]
    },
    {
      icon: FaRocket,
      title: "App Publishing",
      description: "Seamless deployment to major app stores with optimized listings and marketing materials.",
      details: [
        "App Store Optimization",
        "Store Listing Setup",
        "Marketing Screenshots",
        "Technical Requirements Compliance"
      ]
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      description: "Reliable hosting and storage solutions with scalable infrastructure for your growing needs.",
      details: [
        "Secure Data Storage",
        "Cloud Infrastructure Setup",
        "Backup & Recovery",
        "CDN Integration"
      ]
    },
    {
      icon: FaCog,
      title: "Technical Support",
      description: "Comprehensive technical support to ensure your app runs smoothly after launch.",
      details: [
        "24/7 Technical Assistance",
        "Bug Fixes & Updates",
        "Performance Monitoring",
        "Security Patches"
      ]
    },
    {
      icon: FaShieldAlt,
      title: "Security",
      description: "Implement robust security measures to protect your app and user data.",
      details: [
        "Data Encryption",
        "Secure Authentication",
        "Regular Security Audits",
        "Compliance Standards"
      ]
    },
    {
      icon: FaChartLine,
      title: "Analytics & Reporting",
      description: "Track and analyze app performance and user behavior with detailed insights.",
      details: [
        "User Analytics",
        "Performance Metrics",
        "Custom Reports",
        "Data Visualization"
      ]
    },
    {
      icon: FaHeadset,
      title: "Customer Support",
      description: "Dedicated support team to handle your queries and provide timely assistance.",
      details: [
        "Priority Support Channels",
        "Regular Check-ins",
        "Issue Resolution",
        "Feature Requests"
      ]
    }
  ]

  return (
    <section id={id} className="w-full py-20 bg-gradient-to-b from-gray-100 to-gray-500">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            Our Services & Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
            Comprehensive app development solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="water-fill-effect group p-6 rounded-2xl bg-white shadow-lg transition-shadow duration-500 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                '--tw-gradient-from': '#4F46E5',
                '--tw-gradient-to': '#818CF8'
              }}
            >
              <div className="relative z-10 w-full">
                <feature.icon className="text-5xl text-primary mb-4 mx-auto group-hover:text-white transition-colors duration-500" />
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 mb-4 transition-colors duration-500">
                  {feature.description}
                </p>
                <ul className="space-y-2 text-left">
                  {feature.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-500"
                    >
                      <svg 
                        className="w-4 h-4 mr-2 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features 