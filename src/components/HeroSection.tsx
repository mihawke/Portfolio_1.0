import React, { ReactNode, useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'];

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm tracking-widest text-gray-600 uppercase mb-4 font-medium">
            Let's build something together
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-700 mb-4">
            Hi, I'm
            <span className="bg-gradient-to-r from-[#5651e5] to-[#709dff] bg-clip-text text-transparent">
              {' '}Pratik Gawari
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl text-gray-700 mb-6 h-12 flex justify-center items-center">
            A <span className="ml-2">{roles[0]}</span>
            <span className="animate-blink ml-1">|</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
            I'm a full stack developer specializing in building (and occasionally designing)
            exceptional digital experiences. Currently, I'm focused on building back-end applications.
          </p>

          <div className="flex justify-center space-x-8">
            <SocialLink
              href="https://www.linkedin.com/in/pratikg22/"
              icon={<FaLinkedin className="w-6 h-6" />}
              label="Visit LinkedIn Profile"
            />
            <SocialLink
              href="https://github.com/mihawke"
              icon={<FaGithub className="w-6 h-6" />}
              label="Visit GitHub Profile"
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
}
const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group"
  >
    <div className="p-4 rounded-full shadow-lg shadow-gray-400 
                    transition-all duration-300 ease-out
                    hover:scale-110 hover:shadow-xl hover:shadow-gray-400
                    hover:bg-gradient-to-r hover:from-[#5651e5] hover:to-[#709dff]
                    group-hover:text-white">
      {icon}
    </div>
  </a>
);

export default HeroSection;