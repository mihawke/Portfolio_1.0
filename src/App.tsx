import './App.css'
import { AboutSection } from './components/AboutSection'
import ContactSection from './components/ContactSections'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'

function App() {

  return (
    <div className='flex flex-col'>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App
