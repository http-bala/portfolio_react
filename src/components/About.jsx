import React from 'react';
import about_img from './assets/about_img.png';
import resume from './assets/resume.pdf';
import about2 from './assets/about2.jpg'

const About = () => {
  return (
    <section className="bg-white flex flex-col align-middle justify-center h-[90vh]" id="about">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-wrap items-center">
        {/* Image Section */}
        <div className="sm:w-1/2 text-center sm:text-left">
          <img 
            src={about2} 
            alt="About Balakrishna" 
            className=" w-4/5 mx-auto sm:w-full"
          />
        </div>

        {/* Content Section */}
        <div className="sm:w-1/2 mt-8 sm:mt-0">
          <h1 className="text-5xl font-extrabold leading-tight mb-4 text-gray-900">
            About <span style={{ color: '#F2BE21' }}>Me</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Hi, I'm <span style={{ color: '#F2BE21' }}>Balakrishna</span>, a full-stack developer who specializes in delivering high-quality web solutions. My expertise lies in web designing, responsive layouts, and efficient backend development with PHP. As a graduate of Veer Narmad South Gujarat University, I am committed to bringing creativity and functionality together in every project.
          </p>
          <p className="text-gray-600 mb-6">
            Beyond development, I thrive on solving problems, collaborating with clients, and staying ahead of trends. My goal is to help you achieve success through innovative and scalable digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a href={resume} download="BalakrishnaCv">
              <button className="px-6 py-3 font-semibold text-white bg-accent rounded-lg hover:bg-gray-100 hover:text-black hover:shadow-2xl hover:shadow-yellow-500/70 transition-all">
                Download CV
              </button>
            </a>
            <a href="https://github.com/http-bala" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 font-semibold text-white bg-accent rounded-lg flex items-center gap-2 hover:bg-gray-100 hover:text-black hover:shadow-2xl hover:shadow-yellow-500/70 transition-all">
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
