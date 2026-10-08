import React from 'react';
import teamMembers from '../data/teamMembers';

const backimage = "/backgrounds/site-background-alt.webp";
const innovation = "/about/product-innovation.webp";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img
            src={backimage}
            alt="Background"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Diagonal Light Streaks - Top Left */}
        <div className="absolute top-0 left-0 w-96 h-96 opacity-60 z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-purple-400 to-transparent transform -rotate-45 origin-top-left"></div>
          <div className="absolute top-12 left-8 w-0.5 h-full bg-gradient-to-b from-purple-400 via-blue-400 to-transparent transform -rotate-45 origin-top-left"></div>
          <div className="absolute top-0 left-20 w-2 h-96 bg-gradient-to-b from-yellow-300 via-yellow-200 to-transparent transform -rotate-45 origin-top-left blur-sm"></div>
        </div>

        {/* Diagonal Light Streaks - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-50 z-10 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-orange-400 via-yellow-300 to-transparent transform rotate-45 origin-bottom-right"></div>
          <div className="absolute bottom-12 right-8 w-0.5 h-full bg-gradient-to-t from-orange-300 via-yellow-200 to-transparent transform rotate-45 origin-bottom-right"></div>
          <div className="absolute bottom-0 right-20 w-2 h-96 bg-gradient-to-t from-yellow-200 via-orange-300 to-transparent transform rotate-45 origin-bottom-right blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-20">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center animate-fade-in-up animate-float mt-12">
            About Us
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-5xl mx-auto leading-relaxed text-center px-4 animate-fade-in-up animation-delay-200">
            AsTechSolutions software helps manage general resources and technical service. AsTechSolutions has distinguished itself by its business orientation that is infused in the product development. We have everything you need to convert your idea into a successful product. We build excellent Websites, Mobile and Web APPS, PCB designing, Android Apps, Automated Scripts, crucial Software Web Apps custom solutions and dedicated software solutions. Our consultants have all already participated in many deployments and their experiences in this area are an essential asset in the success of your project.
          </p>
        </div>
      </section>

      {/* PRODUCT DEVELOPMENT SECTION */}
      <section className="bg-black py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 text-center animate-fade-in-up animate-slide-in-from-top">
            About Our Product Development
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-center animate-fade-in-left ">
              <div className="relative w-80 h-115 group overflow-hidden shadow-2xl rounded-xl animate-fade-in-up animation-delay-300">
                <img
                  src={innovation}
                  alt="Innovation: Shaping The Future"

                  /* Combined Classes for Styling and Cropping */
                  className="w-full h-full object-cover rounded-lg border-4 border-white transition-all duration-500 
                 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] 
                 
                 /* CRITICAL FIX: Scale slightly to hide the bottom-right artifact */
                 **scale-[1.03]**"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-4 text-gray-300 animate-fade-in-right">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed animate-fade-in-up animation-delay-200">
                We provide a comprehensive platform designed to elevate and transform your business life through the power of advanced technology and innovative products. Our mission is to create solutions that not only meet today's demands but also prepare you to thrive in the future. We believe that technology should work for you, not the other way around — enabling you to focus on growth, creativity, and long-term success.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed animate-fade-in-up animation-delay-300">
                At the heart of our philosophy is a commitment to imperishability — building systems, ideas, and infrastructures that stand the test of time. We dedicate ourselves to developing forward-thinking concepts that empower your company to adapt, evolve, and remain resilient in an ever-changing world.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed animate-fade-in-up animation-delay-400">
                Our goal is simple yet ambitious: to help you accomplish yours. Whether it's through reliable storage solutions, smart automation, or continuous updates on the latest technological advancements, we ensure you stay ahead of the curve. With our platform, your business doesn't just keep up with the future — it helps define it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="relative min-h-screen py-16 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <img
            src={backimage}
            alt="Background"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Diagonal Light Streaks - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-50 z-10 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-orange-400 via-yellow-300 to-transparent transform rotate-45 origin-bottom-right"></div>
          <div className="absolute bottom-12 right-8 w-0.5 h-full bg-gradient-to-t from-orange-300 via-yellow-200 to-transparent transform rotate-45 origin-bottom-right"></div>
          <div className="absolute bottom-0 right-20 w-2 h-96 bg-gradient-to-t from-yellow-200 via-orange-300 to-transparent transform rotate-45 origin-bottom-right blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center animate-fade-in-up animate-slide-in-from-bottom">
            Executive Team
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-5xl mx-auto leading-relaxed text-center mb-12 px-4 animate-fade-in-up animation-delay-200">
            Our team is a diverse group of passionate professionals, dedicated to delivering innovative solutions and exceptional service. With expertise across [your field/industry], we combine creativity, experience, and collaboration to bring your vision to life.
          </p>

          {/* Team Grid */}
          <div className="flex justify-center">
            {teamMembers.slice(0, 1).map((member) => (
              <div key={member.name} className="group flex flex-col items-center animate-fade-in-up">
                <div className="relative w-full max-w-xs overflow-hidden rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-500 hover:scale-105 hover:border-white/40 hover:-translate-y-2">
                  <div className="p-2">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="w-full aspect-square object-cover object-center rounded-xl transition-transform duration-700 group-hover:scale-110"
                      style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-blue-400">{member.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm transition-colors duration-300 group-hover:text-gray-300">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <div key={member.name} className="group flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${200 + index * 100}ms` }}>
                <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-500 hover:scale-105 hover:border-white/40 hover:-translate-y-2">
                  <div className="p-2">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="w-full aspect-square object-cover object-center rounded-xl transition-transform duration-700 group-hover:scale-110"
                      style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-blue-400">{member.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm transition-colors duration-300 group-hover:text-gray-300">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
