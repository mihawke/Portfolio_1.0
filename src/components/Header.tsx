import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [shadow, setShadow] = useState(false);

    const navItems = [
        { href: '', label: 'Home' },
        { href: '', label: 'About' },
        { href: '', label: 'Skills' },
        { href: '', label: 'Projects' },
        { href: '', label: 'Contact' }
    ];

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
        return () => window.removeEventListener('scroll', handleShadow);
    }, []);

    return (
        <header
            className={`fixed w-full h-20 z-[100] bg-white/95 backdrop-blur-sm ${shadow ? 'shadow-lg' : ''
                }`}
        >
            <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
                <a href="/" className="flex items-center">
                    <img
                        src="/api/placeholder/48/48"
                        alt="PG"
                        className="w-12 h-12 rounded-full"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex items-center">
                        {navItems.map(({ href, label }) => (
                            <li key={label} className="group">
                                <a
                                    href={href}
                                    className="ml-10 text-sm font-semibold font-roboto uppercase text-gray-700 hover:text-indigo-500 transition-colors duration-300"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;