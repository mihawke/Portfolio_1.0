import React, { ReactNode, useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  const roles = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'];
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section id="home" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-700 mb-4 font-roboto">
            Hi, I'm
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent font-roboto">
              {'  '}Pratik Gawari
            </span>
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-700 mb-6 h-12 flex justify-center items-center">
            A <span className="ml-4 bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">{typedText}</span>
            <span className="animate-blink ml-1">|</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg font-roboto">
            I'm a full stack developer specializing in building
            exceptional digital experiences.
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
                    hover:bg-gradient-to-r hover:from-indigo-600 hover:to-indigo-400
                    group-hover:text-white">
      {icon}
    </div>
  </a>
);

export default HeroSection;