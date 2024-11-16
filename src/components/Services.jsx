import React from "react";
import { MdDesignServices, MdSettingsApplications } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { AiOutlineCloud } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";

const Services = () => {
  return (
    <section
      className="bg-gradient-to-tl from-purple-900 via-purple-700 to-purple-600 py-16"
      id="service"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 text-white">
         <h1 className="text-5xl text-center font-extrabold leading-tight mb-9 ">
            My <span style={{ color: '#F2BE21' }}>service</span>
          </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card */}
          <div className="group relative p-6 rounded-lg bg-white/20 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-yellow-400 hover:text-purple-900 hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,223,0,0.7)]">
            <MdDesignServices size={50} className="mb-4 group-hover:text-purple-900" />
            <h3 className="font-bold text-xl">Web Designing</h3>
            <p className="mt-2">
              Designing visually appealing and user-friendly websites is my
              passion. I craft sites that not only look great but also offer a
              seamless user experience.
            </p>
          </div>

          {/* Service Card */}
          <div className="group relative p-6 rounded-lg bg-white/20 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-yellow-400 hover:text-purple-900 hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,223,0,0.7)]">
            <MdSettingsApplications
              size={50}
              className="mb-4 group-hover:text-purple-900"
            />
            <h3 className="font-bold text-xl">Web Applications</h3>
            <p className="mt-2">
              From simple CMS platforms to complex business solutions, I develop
              scalable and secure web-based applications tailored to your needs.
            </p>
          </div>

          {/* Service Card */}
          <div className="group relative p-6 rounded-lg bg-white/20 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-yellow-400 hover:text-purple-900 hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,223,0,0.7)]">
            <FaServer size={50} className="mb-4 group-hover:text-purple-900" />
            <h3 className="font-bold text-xl">Backend Development</h3>
            <p className="mt-2">
              Strong backend systems are essential for seamless web applications.
              I specialize in building reliable, efficient, and secure backend
              solutions.
            </p>
          </div>

          {/* Additional Service - Cloud Solutions */}
          <div className="group relative p-6 rounded-lg bg-white/20 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-yellow-400 hover:text-purple-900 hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,223,0,0.7)]">
            <AiOutlineCloud size={50} className="mb-4 group-hover:text-purple-900" />
            <h3 className="font-bold text-xl">Cloud Solutions</h3>
            <p className="mt-2">
              Offering scalable cloud hosting and deployment solutions to ensure
              your web applications are always accessible and highly available.
            </p>
          </div>

          {/* Additional Service - Cybersecurity */}
          <div className="group relative p-6 rounded-lg bg-white/20 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-yellow-400 hover:text-purple-900 hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,223,0,0.7)]">
            <BsFillShieldLockFill
              size={50}
              className="mb-4 group-hover:text-purple-900"
            />
            <h3 className="font-bold text-xl">Cybersecurity</h3>
            <p className="mt-2">
              Ensuring the safety of your applications with advanced security
              measures to protect against vulnerabilities and threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
