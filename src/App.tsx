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
import { FaMoon, FaSun } from 'react-icons/fa'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleNav = () => {
    setIsOpen(prev => !prev)
  };

  return (
    <div className='flex flex-col relative'>
      <div className='fixed right-6 top-6 z-[100] flex items-center justify-center gap-8'>
        {theme === 'light' ?
          <FaSun onClick={() => setTheme('dark')} className='text-yellow-400' size={24}/> :
          <FaMoon onClick={() => setTheme('light')} className='text-slate-800' size={24}/>}
        <button
          onClick={toggleNav}
        >
          <FaBars size={24} className={`${isOpen ? 'text-white' : 'text-indigo-600'}`} />
        </button>
      </div>
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