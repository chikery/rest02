import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App
