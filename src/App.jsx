import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { NavigationProvider } from './context/NavigationContext'
import Hero from './components/Hero'
import Packages from './components/Packages'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in-out',
      mirror: true // Enables animations on scroll up
    })
  }, [])

  return (
    <NavigationProvider>
      <div className="min-h-screen w-full flex flex-col">
        <main className="flex-grow">
          <Hero id="home" />
          <Features id="features" />
          <Packages id="packages" />
          <CTA id="contact" />
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  )
}

export default App
