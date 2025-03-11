import { useNavigation } from '../context/NavigationContext'

const CTA = ({ id }) => {
  const { scrollToSection } = useNavigation()

  return (
    <section id={id} className="w-full py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Transform Your App Idea into Reality?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 font-sans">
            Get started today and let us help you build the app of your dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@appdev.com"
              className="bg-white text-primary font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
            <button 
              onClick={() => scrollToSection('packages')}
              className="border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
            >
              View Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA 