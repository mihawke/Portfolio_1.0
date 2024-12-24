import { useContext, useState } from 'react'
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
import { ThemeContext } from './context/ThemeContext'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleNav = () => {
    setIsOpen(prev => !prev)
  };

  return (
    <div className={`flex flex-col min-h-screen relative ${theme === 'light' ? 'from-white to-gray-50' : 'from-gray-900 to-gray-950'}`}>
      <div className='fixed right-6 top-6 z-[100] flex items-center justify-center gap-8'>
        {theme === 'light' ?
          <FaSun onClick={() => setTheme('dark')} className='text-gray-700' size={24} /> :
          <FaMoon onClick={() => setTheme('light')} className='text-gray-200' size={24} />}
        <button
          onClick={toggleNav}
        >
          <FaBars size={24}
            className={`${isOpen ?
              `${theme === 'light' ? 'text-white' : 'text-gray-400'} `
              : `${theme === 'light' ? 'text-indigo-600' : 'text-cyan-400'}`}`}
          />
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