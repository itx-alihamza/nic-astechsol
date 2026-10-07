import React from 'react';

// Images from public folder
const background = "/backimage22.webp";
const smartbell = "/smartbell.webp";
const splash = "/splash.webp";
const homescreen = "/homescreen.webp";
const setalarm = "/setalarm.webp";

const Smartbel = () => {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center theme-primary-text mb-8 md:mb-12 animate-fade-in-up animate-float">
            Smart Bell Ringer
          </h2>

          {/* Image Container */}
          <div className="flex justify-center items-center">
            <div className="relative overflow-hidden rounded-2xl bg-black/50 border-4 border-gray-800/30 backdrop-blur-md shadow-xl max-w-6xl w-full animate-fade-in-up animation-delay-200">
              <img
                src={smartbell}
                alt="Smart Bell Ringer Device"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105 max-h-[500px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABR Application Section */}
      <section className="bg-black py-16 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Title and Description */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up animate-slide-in-from-top">
              ABR APPLICATION
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              The Auto Bell Ringer mobile app lets you schedule alarms, timers, and automatic bell rings with ease. You can set custom timings, repeat cycles, and notifications—all controlled directly from your phone.
            </p>
          </div>

          {/* Mobile App Screenshots */}
          <div className="relative">
            {/* Diagonal Light Streaks - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-40 z-0 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-purple-500 via-purple-400 to-transparent transform -rotate-12 origin-bottom-left"></div>
              <div className="absolute bottom-12 left-8 w-0.5 h-full bg-gradient-to-t from-purple-400 via-blue-400 to-transparent transform -rotate-12 origin-bottom-left"></div>
              <div className="absolute bottom-0 left-20 w-2 h-64 bg-gradient-to-t from-yellow-300 via-yellow-200 to-transparent transform -rotate-12 origin-bottom-left blur-sm"></div>
            </div>

            {/* Screenshots Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-end justify-items-center max-w-5xl mx-auto animate-fade-in-up animation-delay-300">
              {/* Splash Screen */}
              <div className="w-full max-w-[800px] animate-fade-in-left">
                <div className="relative overflow-hidden rounded-4xl border-4 border-gray-800/30 shadow-xl bg-transparent transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={splash}
                    alt="ABR Splash Screen"
                    className="w-full h-[550px] object-contain animate-fade-in-up animation-delay-200"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Home Screen (Center) */}
              <div className="w-full max-w-[800px] animate-fade-in-up">
                <div className="relative overflow-hidden rounded-4xl border-4 border-gray-800/30 shadow-xl bg-black transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={homescreen}
                    alt="ABR Home Screen"
                    className="w-full h-[550px] object-contain animate-fade-in-up animation-delay-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Set Alarm Screen */}
              <div className="w-full max-w-[800px] animate-fade-in-right">
                <div className="relative overflow-hidden rounded-4xl border-2 border-gray-800/30 shadow-xl bg-black transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={setalarm}
                    alt="ABR Set Alarm Screen"
                    className="w-full h-[550px] object-contain animate-fade-in-up animation-delay-400"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Smartbel;
