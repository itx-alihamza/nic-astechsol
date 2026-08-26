import React from 'react';

// Images from public folder
const background = "/backimage22.jpg";
const smartlocker = "/smartlocker.png";

const Smartlocker = () => {
  return (
    <>
      <section className="relative min-h-screen py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <img
          src={background}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover object-center z-0"
          loading="eager"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Diagonal Light Streaks - Top Left */}
        <div className="absolute top-0 left-0 w-96 h-96 opacity-60 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-purple-400 to-transparent transform rotate-12 origin-top-left"></div>
          <div className="absolute top-12 left-8 w-0.5 h-full bg-gradient-to-b from-purple-400 via-blue-400 to-transparent transform rotate-12 origin-top-left"></div>
          <div className="absolute top-0 left-20 w-2 h-96 bg-gradient-to-b from-yellow-300 via-yellow-200 to-transparent transform rotate-12 origin-top-left blur-sm"></div>
        </div>

        {/* Diagonal Light Streaks - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-60 z-10 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-purple-500 via-purple-400 to-transparent transform -rotate-12 origin-bottom-right"></div>
          <div className="absolute bottom-12 right-8 w-0.5 h-full bg-gradient-to-t from-purple-400 via-blue-400 to-transparent transform -rotate-12 origin-bottom-right"></div>
          <div className="absolute bottom-0 right-20 w-2 h-96 bg-gradient-to-t from-yellow-300 via-yellow-200 to-transparent transform -rotate-12 origin-bottom-right blur-sm"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto mt-20">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#00A6FF] mb-6 animate-fade-in-up animate-float">
            Smart Locker System
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white text-center mt-4 mb-12 md:mb-16 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
            Secure, convenient, and intelligent: Unlock the future of storage with our Smart Locker System.
          </p>

          {/* Image Container */}
          <div className="flex justify-center items-center">
            <div className="relative overflow-hidden rounded-2xl bg-black/50 border-4 border-gray-800/30 backdrop-blur-md shadow-xl max-w-5xl w-full animate-fade-in-up animation-delay-300">
              <img
                src={smartlocker}
                alt="Smart Locker System"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105 max-h-[500px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Smartlocker;