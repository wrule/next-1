'use client';

import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 
        transition-all duration-300 ease-in-out
        backdrop-blur-sm
        z-50
        ${isScrolled 
          ? 'bg-white/80 shadow-lg py-4' 
          : 'bg-transparent py-6'}
      `}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-bold">Logo</div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
