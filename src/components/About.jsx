import React from "react";
import { motion } from "framer-motion";
import about2 from "./assets/about2.jpg";
import resume from "./assets/resume.pdf";

const About = () => {
  // Animation variants for image and text
  const imageVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="bg-white flex flex-col align-middle justify-center h-auto lg:h-[90vh] py-10 md:py-0"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-wrap items-center">
        {/* Image Section */}
        <motion.div
          className="sm:w-1/2 text-center sm:text-left"
          variants={imageVariant}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={about2}
            alt="About Balakrishna"
            className="w-2/2 mx-auto sm:w-full "
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="sm:w-1/2 mt-8 sm:mt-0"
          variants={textVariant}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
            About <span style={{ color: "#F2BE21" }}>Me</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Hi, I'm{" "}
            <span
              className="font-bold"
              style={{ color: "#F2BE21" }}
            >
              Balakrishna
            </span>
            , a full-stack developer who specializes in delivering high-quality
            web solutions. My expertise lies in web designing, responsive
            layouts, and efficient backend development with PHP. As a graduate
            of Veer Narmad South Gujarat University, I am committed to bringing
            creativity and functionality together in every project.
          </p>
          <p className="text-gray-600 mb-6">
            Beyond development, I thrive on solving problems, collaborating with
            clients, and staying ahead of trends. My goal is to help you achieve
            success through innovative and scalable digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <motion.a
              href={resume}
              download="BalakrishnaCv"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 15px rgba(242, 190, 33, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="px-6 py-3 font-semibold text-white bg-accent rounded-lg hover:bg-gray-100 hover:text-black hover:shadow-2xl hover:shadow-yellow-500/70 transition-all">
                Download CV
              </button>
            </motion.a>
            <motion.a
              href="https://github.com/http-bala"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 15px rgba(242, 190, 33, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="px-6 py-3 font-semibold text-white bg-accent rounded-lg flex items-center gap-2 hover:bg-gray-100 hover:text-black hover:shadow-2xl hover:shadow-yellow-500/70 transition-all">
                GitHub
              </button>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
