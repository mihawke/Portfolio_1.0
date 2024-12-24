import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface NavmenuProps {
    isNavVisible: boolean
}
const Navmenu: React.FC<NavmenuProps> = ({ isNavVisible }) => {
      const { theme } = useContext(ThemeContext)

    const navItems = [
        { href: '', label: 'Home' },
        { href: '', label: 'About' },
        { href: '', label: 'Skills' },
        { href: '', label: 'Projects' },
        { href: '', label: 'Contact' }
    ];

    return (
        <nav
            className={` ${theme === 'light' ? ' bg-blue-500' : ' bg-cyan-950'} transition-all duration-500 ${isNavVisible ? 'animate-slideDown' : ''}`}
        >
            <ul className="flex flex-col w-screen h-screen items-center justify-center gap-4">
                {navItems.map(({ href, label }) => (
                    <li key={label} className="group">
                        <a
                            href={href}
                            className={`ml-10 text-3xl font-semibold font-roboto uppercase tracking-wide
                              
                             ${theme === 'light' ? 'text-white hover:text-indigo-800 ' : 'text-gray-400 hover:text-cyan-800 '}  transition-colors duration-300`}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navmenu;