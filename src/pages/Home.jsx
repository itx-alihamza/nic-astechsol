import React from 'react';

// ✅ Import images correctly
const backimage = "/backimage22.jpg";
import featureImage from "../assets/featureImage.png";

// ✅ Import components
import QualitySection from "../components/QualitySection";
import Gallery from "../components/Gallery";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Header Component - Fixed on top */}


      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-screen md:h-screen flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={backimage}
            alt="Hero background"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchpriority="high"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 pt-20 md:pt-30 lg:pt-40 pb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight animate-fade-in-up animate-float">
            Creativity With{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 animate-fade-in-up animation-delay-200">
              Innovation
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300 animate-slide-in-from-top">
            AsTechSolutions is all about developing an end-to-end IoT product from design and development to mass commercialization. With robust experiences, we have grown to develop and deliver premium quality commercial and industrial IoT solutions to our clients.
          </p>

          <div className="mt-12 animate-fade-in-up animation-delay-500 animate-pulse-glow">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300">
              Explore Our Solutions
            </button>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </section>

      {/* CONTENT SECTION 1 */}
      <section className="bg-black py-8 md:py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 animate-fade-in-up animate-slide-in-from-bottom">
              A Place That Helps <br />
              <span className="animate-fade-in-up animation-delay-200 animate-float">Growth of Your Work</span>
            </h2>

            <div className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed animate-fade-in-up animation-delay-300 animate-slide-in-from-top">
              <p className="mb-4">
                AsTechSolutions software helps manage general resources and technical service. AsTechSolutions has distinguished itself by its business orientation that is infused in the product development. We have everything you need to convert your idea into a successful product. We build excellent Websites, Mobile and Web APPS, PCB designing, Android Apps, Automated Scripts, crucial Software Web Apps custom solutions and dedicated software solutions. Our consultants have all already participated in many deployments and their experiences in this area are an essential asset in the success of your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION 2 */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 animate-fade-in-up animate-slide-in-from-bottom">
              We Provides All Facilities For <br />
              <span className="animate-fade-in-up animation-delay-200 animate-float">Product Development</span>
            </h2>

            <div className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed animate-fade-in-up animation-delay-300 animate-slide-in-from-top">
              <p className="mb-4">
                We cover a wide range of consumer-oriented devices, as well as some enterprise-focused devices. IoT is essential for websites, mobile apps, web applications, PCB designing, Android apps, automated scripts, key software web apps, and dedicated software solutions. We cover a wide range of technologies and services that are dependent on specific use cases. IoT is having a big impact on multiple digital businesses, and it's a growing trend with a lot of appeals. To be successful with IoT products, you need to be comfortable with both the technology and product development aspects. We use the latest technologies to stay up-to-date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES BLOCK */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Image */}
            <div className="flex justify-center md:justify-start animate-fade-in-left animate-float">
              <img
                src={featureImage}
                alt="Product / 3D Art"
                className="w-full max-w-sm md:max-w-md object-contain rounded-md shadow-lg transition-transform duration-300 hover:scale-105 animate-fade-in-scale"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Right: Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-right">
              <div className="flex flex-col items-center text-center p-4 bg-black/30 rounded-lg animate-fade-in-up animation-delay-200">
                <h3 className="text-white font-semibold mb-2">Virtual Simulation</h3>
                <p className="text-gray-300 text-sm">
                  Virtual Simulation means testing or seeing an idea in computer environment.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-black/30 rounded-lg animate-fade-in-up animation-delay-300">
                <h3 className="text-white font-semibold mb-2">Prototype Development</h3>
                <p className="text-gray-300 text-sm">
                  Prototype is the initial tangible product that you can physically see and test if it's worth a try.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-black/30 rounded-lg animate-fade-in-up animation-delay-400">
                <h3 className="text-white font-semibold mb-2">MVP</h3>
                <p className="text-gray-300 text-sm">
                  MVP stands for minimum viable product. You can use this version to check if it is a market fit.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-black/30 rounded-lg animate-fade-in-up animation-delay-500 animate-bounce">
                <h3 className="text-white font-semibold mb-2">Mass Production</h3>
                <p className="text-gray-300 text-sm">
                  Mass Commercialization Design: From Virtual Simulation to Prototype to MVP to Mass Production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section & Gallery */}
      <QualitySection />
      <Gallery />
    </div>
  );
};

export default Home;