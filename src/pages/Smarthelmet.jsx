import React from "react";

// ✅ Use public folder for images (reliable)
const background = "/backimage22.jpg";
const smarthelmet = "/smarthelmet.png";
const firstimage = "/111.png";
const secondimage = "/222.png";
const thirdimage = "/333.png";
const fourthimage = "/444.png";
const helmet = "/helmets.png";
const leftsidimage = "/leftsideimag.png";
const helmetnova = "/helmetnova.png";

const Smarthelmet = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <img
          src={background}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover object-center z-0"
          loading="eager"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>

        <div className="relative z-20 max-w-7xl mx-auto mt-20">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#008CFF] mb-6 animate-fade-in-up animate-float">
            Smart Helmet
          </h2>

          {/* Image Container */}
          <div className="flex justify-center items-center">
            <div className="relative overflow-hidden rounded-2xl bg-black/50 border-4 border-white/15 backdrop-blur-md shadow-xl max-w-4xl w-full animate-fade-in-up animation-delay-200">
              <img
                src={smarthelmet}
                alt="Smart Helmet"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105 max-h-[500px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto ">
          {/* Subtitle */}
          <p className="text-xl md:text-3xl lg:text-4xl text-white text-center font-bold mb-8 animate-fade-in-up animation-delay-300">
            Ride Smarter. Ride Safer.
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center animate-fade-in-up animation-delay-400">
            Meet the Nova Series, the next evolution in motorcycle safety.
            Designed with cutting-edge technology and engineered for maximum
            protection, the Nova Series Smart Helmet isn't just a helmet — it's
            your intelligent riding companion.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative min-h-screen py-16 md:py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <img
          src={background}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover object-center z-0"
          loading="lazy"
        />

        {/* Diagonal Light Streaks - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-60 z-10 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-purple-500 via-purple-400 to-transparent transform -rotate-12 origin-bottom-left"></div>
          <div className="absolute bottom-12 left-8 w-0.5 h-full bg-gradient-to-t from-purple-400 via-blue-400 to-transparent transform -rotate-12 origin-bottom-left"></div>
          <div className="absolute bottom-0 left-20 w-2 h-96 bg-gradient-to-t from-yellow-300 via-yellow-200 to-transparent transform -rotate-12 origin-bottom-left blur-sm"></div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-black/40"></div>

        <div className="relative z-20 max-w-7xl mx-auto">
          {/* Features Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-12 md:mb-16 animate-fade-in-up animate-slide-in-from-top">
            Features
          </h2>

          {/* Features Grid - 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20 animate-fade-in-up animation-delay-200">
            {/* Feature 1: Brain Signal Detection */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-800/70 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-500 hover:scale-105 hover:border-white/40 p-6 md:p-8 animate-fade-in-up animation-delay-200">
              <div className="flex flex-col items-center text-center">
                <img
                  src={firstimage}
                  alt="Brain Signal Detection"
                  className="w-20 h-20 md:w-24 md:h-24 mb-4 object-contain animate-fade-in-up animation-delay-300"
                />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white animate-fade-in-up animation-delay-400">
                  Brain Signal Detection
                </h3>
              </div>
            </div>

            {/* Feature 2: Brain Signal Detection */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-800/70 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-500 hover:scale-105 hover:border-white/40 p-6 md:p-8 animate-fade-in-up animation-delay-300">
              <div className="flex flex-col items-center text-center">
                <img
                  src={secondimage}
                  alt="Brain Signal Detection"
                  className="w-20 h-20 md:w-24 md:h-24 mb-4 object-contain animate-fade-in-up animation-delay-400"
                />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white animate-fade-in-up animation-delay-500">
                  Brain Signal Detection
                </h3>
              </div>
            </div>

            {/* Feature 3: Crash Detection */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-800/70 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-500 hover:scale-105 hover:border-white/40 p-6 md:p-8 animate-fade-in-up animation-delay-400">
              <div className="flex flex-col items-center text-center">
                <img
                  src={thirdimage}
                  alt="Crash Detection"
                  className="w-20 h-20 md:w-24 md:h-24 mb-4 object-contain animate-fade-in-up animation-delay-500"
                />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white animate-fade-in-up animation-delay-600">
                  Crash Detection
                </h3>
              </div>
            </div>

            {/* Feature 4: Bluetooth Connectivity */}
            <div className="group relative overflow-hidden rounded-2xl bg-gray-800/70 backdrop-blur-md border border-white/20 shadow-xl transition-all duration-500 hover:scale-105 hover:border-white/40 p-6 md:p-8 animate-fade-in-up animation-delay-500">
              <div className="flex flex-col items-center text-center">
                <img
                  src={fourthimage}
                  alt="Bluetooth Connectivity"
                  className="w-20 h-20 md:w-24 md:h-24 mb-4 object-contain animate-fade-in-up animation-delay-600"
                />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white animate-fade-in-up animation-delay-700">
                  Bluetooth Connectivity
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in-up animation-delay-200">
              Colors truly matters - and we know it!
            </h3>
          </div>

          {/* Helmet Image */}
          <div className="flex justify-center items-center mt-12 animate-fade-in-up animation-delay-300">
            <div className="relative overflow-hidden rounded-2xl border-4 border-white/15 backdrop-blur-md shadow-xl max-w-4xl w-full">
              <img
                src={helmet}
                alt="Smart Helmet"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105 max-h-[500px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* People Are Loving It Section */}
      <section className="bg-black py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-12 md:mb-16 animate-fade-in-up animate-slide-in-from-bottom">
            People Are Loving It!
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16">
            {/* Left Side - Image */}
            <div className="w-full animate-fade-in-left">
              <div className="relative aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-3xl border-8 border-[#121212] shadow-[inset_0_0_50px_rgba(0,0,0,0.9)] animate-fade-in-up animation-delay-200">
                <img
                  src={leftsidimage}
                  alt="Rider with NOVA helmet in a tunnel"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="text-white space-y-6 animate-fade-in-right">
              {/* Main Paragraph */}
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 animate-fade-in-up animation-delay-300">
                Every day, more riders are choosing NOVA – the Smart Helmet for
                its unbeatable blend of safety, technology, and style. From
                delivery riders to traffic officers, NOVA is redefining what it
                means to ride responsibly. Whether it's the brain-signal
                ignition lock or the ECE-certified impact protection, people
                trust NOVA to keep them safe on every ride.
              </p>

              {/* Quote Section */}
              <div className="space-y-2">
                <p className="text-sm md:text-base font-normal text-white animate-fade-in-up animation-delay-400">
                  “It's not just a helmet — it's a commitment to safety. I finally
                  feel like I'm protected and connected.”
                  <br />
                  — Ali, Bikers Group Head, Lahore
                </p>
              </div>

              {/* Feature List */}
              <div className="text-sm md:text-base leading-relaxed space-y-1 text-gray-300 animate-fade-in-up animation-delay-500">
                <p>Technology-Enforced Safety</p>
                <p>Trusted by Riders & Enforcers</p>
                <p>Brain-Signal Detection Ignition</p>
                <p>Proudly Made in Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Now Section */}
      <section className="bg-black text-white max-w-7xl mx-auto py-16 md:py-24">
        {/* Top Centered Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold animate-fade-in-up">
            Order Now!
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 px-4 md:px-8">
          {/* Left Column: Text Content */}
          <div className="text-left flex flex-col animate-fade-in-left ml-5 md:ml-28">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
              Order NOW – Ride Smart, <br className="hidden md:block" /> <span className="ml-30">Ride Safe</span>
            </h2>

            <div className=" animate-fade-in-up animation-delay-300">
              <p className="text-sm sm:text-base">
                Your ride deserves more than just protection — it deserves intelligence.
              </p>

              <p className="text-sm sm:text-base">ECE 22.06 Certified</p>
              <p className="text-sm sm:text-base">Brain-Signal Ignition Lock</p>
              <p className="text-sm sm:text-base">Built-in GPS & IoT Ready</p>
              <p className="text-sm sm:text-base">Designed & Manufactured in Pakistan</p>

              <p className="text-sm sm:text-base">
                Join the movement toward zero helmetless rides and be part of the road safety revolution.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="border-4 border-black/10 md:rounded-2xl animate-fade-in-right">
            <div className="p-4">
              <div className="flex justify-center">
                <div className="p-3">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-white/20 shadow-lg animate-fade-in-up animation-delay-200">
                    <img
                      src={helmetnova}
                      alt="Smart Helmet Nova Series"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Smarthelmet;