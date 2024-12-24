import React, { ReactNode } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../App.css'

const Footer = () => {
    return (
        <footer className="relative mt-20 bg-[#5651e5]">
            {/* Waves Animation */}
            <div className="wave-container">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>

            <div className="container mx-auto px-4 pb-12">
                {/* Social Icons */}
                <div className="flex justify-center space-x-6 mb-8">
                    <FooterIcon href="https://github.com/mihawke" icon={<FaGithub size={24} />} label="GitHub" />
                    <FooterIcon href="https://www.linkedin.com/in/pratikg22/" icon={<FaLinkedin size={24} />} label="LinkedIn" />
                    <FooterIcon href="mailto:your.email@example.com" icon={<FaEnvelope size={24} />} label="Email" />
                </div>

                {/* Navigation Menu */}
                <nav className="mb-8">
                    <ul className="flex justify-center flex-wrap gap-8">
                        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-white/90 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Copyright */}
                <div className="text-center text-white/90">
                    <p>© {new Date().getFullYear()} Pratik Gawari | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

interface FooterIconProps {
    href: string
    icon: ReactNode
    label: string
}
const FooterIcon: React.FC<FooterIconProps> = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 
               text-white transition-all duration-300 
               hover:scale-110"
    >
        {icon}
    </a>
);

export default Footer;