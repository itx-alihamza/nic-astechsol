import React from "react";
import frontimage from "../assets/frontimage.png";
const backimage = "/backimage22.webp";

const QualitySection = () => {
  return (
    <section className="relative py-16 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backimage}
          alt="Background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Centered Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up animate-float">
            Quality that You Deserve
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start">
          {/* Left Column - Text */}
          <div className="md:w-1/2 w-full animate-fade-in-left">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed animate-fade-in-up animation-delay-200">
              With continuously developing purchaser expectations, organizations are placed under growing strain to supply services and products on the edge of excellence. AsTechSolutions relies on quality assurance bringing the domain-qualified committed team. that guarantee the quality and excellence of your design and products. We firmly believe in maintaining the quality and therefore provide optimized Websites, Mobile and Web APPS, and top-of-the-line PCB fabrication that helps you convert your concept into a life that exceeds your goals. We use modern technology to stay up to date.
            </p>
          </div>

          {/* Right Column - Image */}

          <div className="md:w-1/2 w-full animate-fade-in-right">
            <div className="bg-white/10 p-1 border border-white/20 rounded-lg backdrop-blur-sm animate-fade-in-up animation-delay-300 hover:scale-105 transition-transform duration-300">
              <img
                src={frontimage}
                alt="3D Design and Prototype"
                className="w-full h-auto object-cover rounded"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
