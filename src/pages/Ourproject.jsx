import React from 'react';
import { Link } from 'react-router-dom';

// ✅ Use public folder for images (reliable)
const smartHelmet = "/projects/smart-helmet.webp";
const smartBellRinger = "/projects/smart-bell-ringer.webp";
const digitalLocker = "/projects/digital-locker.webp";
const backimage = "/backgrounds/site-background-alt.webp";

const OurProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Helmet",
      description: "Pakistan's First Ever Locally Manufactured ECE Certified Helmet. Coupled with State of the Art Brain Signal Detection Technology.",
      image: smartHelmet,
      link: "/smarthelmet"
    },
    {
      id: 2,
      title: "Smart Bell Ringer",
      description: "Automating the conventional School/College Bells through Smart Bell Ringer.",
      image: smartBellRinger,
      link: "/smartbel"
    },
    {
      id: 3,
      title: "Digital Locker",
      description: "Securely store and access all your important documents anytime with our Digital Locker.",
      image: digitalLocker,
      link: "/smartlocker"
    }
  ];

  return (
    <>
      {/* Section 1: Our Projects with Background Image */}
      <section
        className="relative min-h-screen py-16 px-4 md:px-8 lg:px-16 flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Background Image */}
        <img
          src={backimage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Diagonal Light Streaks - Top Left */}
        <div className="absolute top-0 left-0 w-96 h-96 opacity-60 pointer-events-none">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-purple-400 to-transparent transform -rotate-45 origin-top-left"></div>
          <div className="absolute top-12 left-8 w-0.5 h-full bg-gradient-to-b from-purple-400 via-blue-400 to-transparent transform -rotate-45 origin-top-left"></div>
          <div className="absolute top-0 left-20 w-2 h-96 bg-gradient-to-b from-yellow-300 via-yellow-200 to-transparent transform -rotate-45 origin-top-left blur-sm"></div>
        </div>

        {/* Diagonal Light Streaks - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-50 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-orange-400 via-yellow-300 to-transparent transform rotate-45 origin-bottom-right"></div>
          <div className="absolute bottom-12 right-8 w-0.5 h-full bg-gradient-to-t from-orange-300 via-yellow-200 to-transparent transform rotate-45 origin-bottom-right"></div>
          <div className="absolute bottom-0 right-20 w-2 h-96 bg-gradient-to-t from-yellow-200 via-orange-300 to-transparent transform rotate-45 origin-bottom-right blur-sm"></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-radial from-orange-400/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Our Projects Header Section */}
          <div className="text-center mt-20 mb-12 md:mb-16 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up animate-float">
              Our Projects
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in-up animation-delay-200">
              We take pride in the work we do. Our projects reflect our commitment to quality, creativity, and innovation. Each one is a testament to our dedication to delivering results that make a difference. From start to finish, we focus on bringing ideas to life with care, skill, and passion.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-fade-in-up animation-delay-300">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={project.link}
                className="group relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-white/20 cursor-pointer animate-fade-in-up animation-delay-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Section with Rounded Top */}
                <div className="p-2">
                  <div className="aspect-video overflow-hidden relative rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Gradient Overlay on Image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 pt-4 text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 tracking-wide animate-fade-in-up animation-delay-300">{project.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed animate-fade-in-up animation-delay-400">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Impact Statement with Solid Black Background */}
      <section className="bg-black py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in-up animate-slide-in-from-top">
            Space to make your<br />greatest impact.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-5xl mx-auto leading-relaxed px-4 animate-fade-in-up animation-delay-200">
            AsTechSolutions – Where IoT Meets Innovation. We're your end-to-end IoT partner, turning concepts into cutting-edge reality. Our expertise fuels top-tier commercial and industrial IoT solutions. If you're ready to lead the tech evolution, AsTechSolutions is your launchpad. Let's bring your vision to life, the modern way.
          </p>
        </div>
      </section>
    </>
  );
};

export default OurProjects;
