import { useState } from 'react'
import './App.css'
import ContactSection from './components/ContactSections'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import Navmenu from './components/Navmenu'
import { FaBars } from 'react-icons/fa6'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(prev => !prev)
  };

  return (
    <div className='flex flex-col relative'>
      <button
        onClick={toggleNav}
        className='fixed right-6 top-6 z-[100]'>
        <FaBars size={24} className={`${isOpen ? 'text-white' : 'text-indigo-600'}`} />
      </button>
      {isOpen ?
        <Navmenu isNavVisible={isOpen} />
        :
        <>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </>
      }
    </div>
  )
}

export default App