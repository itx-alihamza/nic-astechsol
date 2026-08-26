import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Backimage = "/backimage.jpg";

const Gettouch = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={Backimage}
          alt="Background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob [animation-delay:2000ms]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 mt-10">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Let's connect for a bit more so that you can get help with whatever you're struggling with.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Location Card - FIXED LINK */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=NIC+Peshawar+PTCL+Training+center+University+Rd"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700/50 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-[#131E29] rounded-full flex items-center justify-center mb-6">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
              <p className="text-gray-300 leading-relaxed">
                NIC Peshawar, University Rd, Peshawar
              </p>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+923176972651"
            className="block cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700/50 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-blue-900/20 rounded-full flex items-center justify-center mb-6">
                <FaPhoneAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Call Us On</h3>
              <p className="text-gray-300">+923176972651</p>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:info@astechsolutions.com.pk"
            className="block cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-gray-700/50 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-blue-900/20 rounded-full flex items-center justify-center mb-6">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
              <p className="text-gray-300">info@astechsolutions.com.pk</p>
            </div>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Gettouch;
