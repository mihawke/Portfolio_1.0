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
                        alt="Pratik Gawari"
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
                                    className="ml-10 text-sm uppercase tracking-wider text-gray-700 hover:text-[#5651e5] transition-colors duration-300"
                                >
                                    {label}
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#5651e5]"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isOpen ? 'fixed' : 'hidden'} left-0 top-20 w-full bg-white/95 backdrop-blur-sm`}>
                <ul className="py-4 px-4">
                    {navItems.map(({ href, label }) => (
                        <li key={label} className="py-4 border-b border-gray-200 last:border-none">
                            <a
                                href={href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm uppercase tracking-wider text-gray-700 hover:text-[#5651e5] transition-colors duration-300 block"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;