'use client';
import { useState, useEffect, useCallback } from 'react';
import ConnectButton from '../ConnectButton';

interface ScrollState {
  isVisible: boolean;
  isAtTop: boolean;
  lastScrollY: number;
}

const Header = () => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isVisible: true,
    isAtTop: true,
    lastScrollY: 0
  });

  const updateHeader = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollState(prev => ({
      isVisible: currentScrollY < prev.lastScrollY || currentScrollY < 50,
      isAtTop: currentScrollY < 10,
      lastScrollY: currentScrollY
    }));
  }, []);

  useEffect(() => {
    let frameId: number;
    let isScheduled = false;

    const handleScroll = () => {
      if (!isScheduled) {
        isScheduled = true;
        frameId = requestAnimationFrame(() => {
          updateHeader();
          isScheduled = false;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, [updateHeader]);

  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-in-out
        ${scrollState.isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${scrollState.isAtTop 
          ? 'py-6 bg-transparent' 
          : 'py-4 bg-white/70 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)]'}
      `}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className={`
            text-xl font-bold 
            transition-colors duration-300
            ${scrollState.isAtTop ? 'text-gray-800' : 'text-gray-900'}
          `}>
            Logo
          </div>
          
          <nav className="flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`
                  relative py-2 text-sm font-medium
                  transition-colors duration-300
                  ${scrollState.isAtTop ? 'text-gray-800' : 'text-gray-900'}
                  hover:text-blue-600
                  before:absolute before:left-0 before:bottom-0
                  before:w-full before:h-0.5 before:bg-blue-600
                  before:transform before:scale-x-0
                  before:transition-transform before:duration-300
                  hover:before:scale-x-100
                `}
              >
                {item}
              </a>
            ))}
          </nav>

          <ConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
