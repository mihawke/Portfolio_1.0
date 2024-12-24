import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const HeroSection = () => {
  const roles = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'];
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { theme } = useContext(ThemeContext)


  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setTypedText((prev) => prev + currentRole[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setTypedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, charIndex, roleIndex, roles]);

  return (
    <section
      id="home"
      className={`min-h-screen w-full flex items-center justify-center 
    bg-gradient-to-b ${theme === 'light' ? 'from-white to-gray-50' : 'from-gray-900 to-gray-950'}`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-roboto 
             ${theme === 'light' ? 'text-gray-700 ' : 'text-gray-400 '}`}>
            Hi, I'm
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent font-roboto
              ${theme === 'light' ? 'from-indigo-600 to-indigo-400' : 'from-cyan-500 to-cyan-400'}
              `}
            >
              {'  '}Pratik Gawari
            </span>
          </h1>

          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold 
            ${theme === 'light' ? 'text-gray-700 ' : 'text-gray-400 '} 
            mb-6 h-12 flex justify-center items-center`}
          >
            A <span className={`ml-4 bg-gradient-to-r 
            ${theme === 'light' ? 'from-indigo-600 to-indigo-400' : 'from-cyan-500 to-cyan-400'} 
            bg-clip-text text-transparent`}>{typedText}</span>
            <span className="animate-blink ml-1">|</span>
          </h2>

          <p className={`${theme === 'light' ? 'text-gray-700 ' : 'text-gray-400 '} max-w-2xl mx-auto mb-12 text-lg font-roboto`}>
            I'm a full stack developer specializing in building
            exceptional digital experiences.
          </p>

          <div className="flex justify-center space-x-8">
            <SocialLink
              href="https://www.linkedin.com/in/pratikg22/"
              icon={<FaLinkedin className="w-6 h-6" />}
              label="Visit LinkedIn Profile"
              theme={theme}
            />
            <SocialLink
              href="https://github.com/mihawke"
              icon={<FaGithub className="w-6 h-6" />}
              label="Visit GitHub Profile"
              theme={theme}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface SocialLinkProps {
  href: string
  icon: ReactNode
  label: string
  theme: string
}
const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, theme }) => (

  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group"
  >
    <div
      className={`p-4 rounded-full shadow-lg
                    transition-all duration-300 ease-out
                    hover:scale-110 hover:shadow-xl
                    hover:bg-gradient-to-r 
                    ${theme === 'light' ? ' hover:from-indigo-600 hover:to-indigo-400 text-gray-700 group-hover:text-white shadow-gray-400  hover:shadow-gray-400'
          : ' hover:from-cyan-600 hover:to-cyan-400 text-gray-400 group-hover:text-black shadow-gray-700  hover:shadow-gray-700'}`}
    >
      {icon}
    </div>
  </a>
);

export default HeroSection;