import { FaRocket, FaArrowDown } from 'react-icons/fa'
import { useNavigation } from '../context/NavigationContext'
import background from "../assets/technology.png"

const Hero = ({ id }) => {
  const { scrollToSection } = useNavigation()

  return (
    <div id={id} className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image with Reduced Overlay */}
      <div className="absolute inset-0 w-full">
        <img 
          src={background}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Reduced opacity in the gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-dark/50" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content with text shadow for better readability */}
      <div className="container relative z-20">
        <div className="text-center max-w-5xl mx-auto px-4" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Welcome to <span className="text-accent">Milestone Technologies</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-12 max-w-2xl mx-auto drop-shadow-lg">
            Transforming Your Vision Into Powerful Mobile Applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('packages')}
              className="bg-white/90 backdrop-blur-sm text-primary hover:bg-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg"
            >
              <FaRocket className="mr-2 group-hover:rotate-12 transition-transform" />
              <span>Get Started</span>
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="border-2 border-white/80 backdrop-blur-sm text-white hover:bg-white/10 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with reduced opacity background */}
      <button 
        onClick={() => scrollToSection('features')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-gray-200 transition-colors cursor-pointer bg-black/20 backdrop-blur-sm p-3 rounded-full"
      >
        <div className="animate-bounce">
          <FaArrowDown className="w-6 h-6" />
        </div>
      </button>
    </div>
  )
}

export default Hero 