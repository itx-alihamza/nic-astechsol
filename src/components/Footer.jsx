import React from 'react';
const logo = '/logo.webp';

const Footer = () => {
  return (
    <footer className="theme-footer text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-col lg:flex-row justify-around items-start gap-8">

          {/* Logo Section - FIXED */}
          <div className="relative w-24 sm:w-32 h-16 sm:h-10 mt-6 md:mt-5 lg:mt-0">
            <img
              src={logo}
              alt="Tech Solutions Logo"
              className="absolute z-20 h-16 sm:h-40 md:h-60 lg:h-80 w-auto object-contain max-w-none -top-2 sm:-top-8 md:-top-10 lg:-top-12 left-0"
              loading="lazy"
            />
          </div>

          {/* Quick Links Section */}
          {/* Changed ml-45 to lg:ml-45 so it only shifts on desktop */}
          <div className="mt-16 lg:mt-8 ml-0 lg:ml-45">
            <h3 className="font-semibold text-lg mb-1">Quick Links</h3>
            <ul className="list-disc pl-5">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/projects" className="hover:underline">Our Projects</a></li>
              <li><a href="/pricing" className="hover:underline">Pricing</a></li>
              <li><a href="/gettouch" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Important Links Section */}
          <div className="mt-8 lg:mt-8 mr-0 lg:mr-10">
            <h3 className="font-semibold text-lg mb-1">Important Links</h3>
            <ul className="list-disc pl-5">
              <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="#" className="hover:underline">Legal</a></li>
              <li><a href="#" className="hover:underline">Business</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/20 pt-6 pb-4 mt-10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm opacity-80">© Copyright 2025 Astechsolutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
