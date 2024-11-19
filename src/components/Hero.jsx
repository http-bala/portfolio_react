import React, { useState } from "react";
import Avtar_image from "./assets/hero-image1.png";
import { FaGithub } from "react-icons/fa";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <>
      <section
        className="text-white bg-gradient-to-tl from-purple-900 via-purple-700 to-purple-600 h-auto lg:h-[100vh] "
        onMouseMove={handleMouseMove}
      >
        <Navbar />
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28 lg:grid-cols-12">
          {/* Image First on Mobile */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center items-center lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={Avtar_image}
              alt="hero image"
              className="w-64 sm:w-80 lg:w-[400px] xl:w-[500px] transition-transform duration-500 ease-out"
              style={{
                transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`, // Image movement based on mouse position
              }}
            />
          </motion.div>

          {/* Details and Buttons */}
          <div className="order-2 lg:order-1 mt-10 lg:mt-0 lg:col-span-7 flex flex-col items-center lg:items-start">
            <motion.h1
              className="text-4xl font-extrabold leading-tight tracking-tight text-center lg:text-left md:text-5xl xl:text-6xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              I'<span className="text-accent">M</span> <br /> Full Stack
              Developer
            </motion.h1>
            <motion.p
              className="max-w-2xl mt-4 text-lg text-center lg:text-left lg:mt-6 font-light text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              I am a full stack developer skilled in HTML, CSS, JavaScript. I
              use frameworks like React, Laravel, Tailwind CSS, and Express, and
              work with PHP and Node.js for server-side development. I create
              dynamic and responsive web applications, focusing on efficient and
              innovative solutions.
            </motion.p>

            <motion.div
              className="flex gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            >
              <a href="mailto:balakrishnakolla00014@gmail.com">
                <button className="px-6 py-3 font-semibold text-white bg-accent rounded-lg hover:bg-gray-100 hover:text-black hover:shadow-2xl hover:shadow-purple-500/70 transition-all">
                  Hire Me
                </button>
              </a>
              <a href="https://github.com/http-bala" target="_blank">
                <button className="px-6 py-3 font-semibold text-white bg-accent rounded-lg flex items-center gap-2 hover:bg-gray-100 hover:text-black hover:shadow-2xl hover:shadow-purple-500/70 transition-all">
                  <FaGithub size={20} /> Github
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
