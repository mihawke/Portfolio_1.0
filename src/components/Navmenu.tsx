import React from 'react';

interface NavmenuProps {
    isNavVisible: boolean
}
const Navmenu: React.FC<NavmenuProps> = ({ isNavVisible }) => {

    const navItems = [
        { href: '', label: 'Home' },
        { href: '', label: 'About' },
        { href: '', label: 'Skills' },
        { href: '', label: 'Projects' },
        { href: '', label: 'Contact' }
    ];

    return (
        <nav
            className={`bg-blue-500 transition-all duration-500 ${isNavVisible ? 'animate-slideDown' : ''}`}
        >
            <ul className="flex flex-col w-screen h-screen items-center justify-center gap-4">
                {navItems.map(({ href, label }) => (
                    <li key={label} className="group">
                        <a
                            href={href}
                            className="ml-10 text-3xl font-semibold font-roboto uppercase text-white hover:text-indigo-800 transition-colors duration-300"
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