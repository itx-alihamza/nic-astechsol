import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const logo = '/logo.png'; 

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Optimized Scroll Handler (Prevents jitter)
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Only update state if the difference is significant (performance optimization)
    if (Math.abs(currentScrollY - lastScrollY) < 10) return;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false); // Hide on scroll down
      setOpen(false);      // Auto-close mobile menu on scroll
    } else {
      setIsVisible(true);  // Show on scroll up
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleGetInTouch = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate('/gettouch');
  };

  // Helper for consistent link styling
  const navLinkStyles = ({ isActive }) => 
    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive 
        ? 'bg-white/10 text-white' 
        : 'text-gray-400 hover:text-white hover:bg-white/5'
    }`;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${lastScrollY > 50 ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          
          {/* --- LEFT: Logo (Floating Technique) --- */}
          {/* The parent div reserves horizontal space (w-32 to w-48) but 'relative' 
             acts as the anchor. The Link is 'absolute', allowing the image 
             to overflow the header's height without stretching it.
          */}
          <div className="relative flex-shrink-0 w-32 md:w-40 lg:w-48 h-full mt-3">
            <NavLink 
              to="/" 
              aria-label="Home" 
              className="absolute top-1/2 left-0 -translate-y-1/2 z-50"
            >
              <img
                src={logo}
                alt="Tech Solutions"
                className="h-16 md:h-24 lg:h-32 w-auto object-contain transition-transform duration-300 hover:scale-105"
                style={{ maxWidth: 'none' }} // Ensures image isn't constrained by parent width
              />
            </NavLink>
          </div>

          {/* --- CENTER: Navigation (Desktop) --- */}
          <nav className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-lg shadow-lg">
              <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
              <li><NavLink to="/about" className={navLinkStyles}>About Us</NavLink></li>
              <li><NavLink to="/projects" className={navLinkStyles}>Our Projects</NavLink></li>
            </ul>
          </nav>

          {/* --- RIGHT: CTA & Mobile Toggle --- */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <button 
                onClick={handleGetInTouch}
                className="theme-button theme-brand-gradient theme-brand-shadow group gap-2 rounded-lg text-sm text-white"
              >
                <span>Get in Touch</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setOpen(!open)} 
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-50"
              aria-label="Toggle Menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 text-center">
          <NavLink to="/" onClick={() => setOpen(false)} className="text-xl font-medium text-gray-300 hover:text-white transition-colors">Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className="text-xl font-medium text-gray-300 hover:text-white transition-colors">About Us</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)} className="text-xl font-medium text-gray-300 hover:text-white transition-colors">Our Projects</NavLink>
          <button 
            onClick={handleGetInTouch}
            className="theme-button theme-brand-gradient w-full rounded-xl text-white font-bold shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
