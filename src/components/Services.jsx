import React from "react";
import { motion } from "framer-motion";
import { MdDesignServices, MdSettingsApplications } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { AiOutlineCloud } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";

const Services = () => {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for the section heading
  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      className="bg-gradient-to-tl from-purple-900 via-purple-700 to-purple-600 py-16"
      id="service"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 text-white">
        {/* Heading with animation */}
        <motion.h1
          className="text-5xl text-center font-extrabold leading-tight mb-9"
          style={{ color: "#F2BE21" }}
          variants={headingVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My <span style={{ color: "#F2BE21" }}>Service</span>
        </motion.h1>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <motion.div
            className="group relative p-6 rounded-lg bg-white/20 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-yellow-400 hover:text-purple-900 hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,223,0,0.7)]"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <MdDesignServices size={50} className="mb-4 group-hover:text-purple-900" />
            <h3 className="font-bold text-xl">Web Designing</h3>
            <p className="mt-2">
              Designing visually appealing and user-friendly websites is my
              passion. I craft sites that not only look great but also offer a
              seamless user experience.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="group relative p-6 rounded-lg bg-white/20 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-yellow-400 hover:text-purple-900 hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,223,0,0.7)]"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <MdSettingsApplications
              size={50}
              className="mb-4 group-hover:text-purple-900"
            />
            <h3 className="font-bold text-xl">Web Applications</h3>
            <p className="mt-2">
              From simple CMS platforms to complex business solutions, I develop
              scalable and secure web-based applications tailored to your needs.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            className="group relative p-6 rounded-lg bg-white/20 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-yellow-400 hover:text-purple-900 hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,223,0,0.7)]"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <FaServer size={50} className="mb-4 group-hover:text-purple-900" />
            <h3 className="font-bold text-xl">Backend Development</h3>
            <p className="mt-2">
              Strong backend systems are essential for seamless web applications.
              I specialize in building reliable, efficient, and secure backend
              solutions.
            </p>
          </motion.div>

          {/* Service Card 4 */}
          <motion.div
            className="group relative p-6 rounded-lg bg-white/20 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-yellow-400 hover:text-purple-900 hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,223,0,0.7)]"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <AiOutlineCloud size={50} className="mb-4 group-hover:text-purple-900" />
            <h3 className="font-bold text-xl">Cloud Solutions</h3>
            <p className="mt-2">
              Offering scalable cloud hosting and deployment solutions to ensure
              your web applications are always accessible and highly available.
            </p>
          </motion.div>

          {/* Service Card 5 */}
          <motion.div
            className="group relative p-6 rounded-lg bg-white/20 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-yellow-400 hover:text-purple-900 hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(255,223,0,0.7)]"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <BsFillShieldLockFill
              size={50}
              className="mb-4 group-hover:text-purple-900"
            />
            <h3 className="font-bold text-xl">Cybersecurity</h3>
            <p className="mt-2">
              Ensuring the safety of your applications with advanced security
              measures to protect against vulnerabilities and threats.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
