import React from "react";
import image from "./assets/project_image/image.png";
import image1 from "./assets/project_image/image1.png";
import image2 from "./assets/project_image/image2.png";
import image3 from "./assets/project_image/image3.png";
import image4 from "./assets/project_image/image4.png";
import image5 from "./assets/project_image/image5.png";

const Project = () => {
  return (
    <section
      className="projects py-16 bg-gradient-to-tl from-purple-900 via-purple-700 to-purple-600 text-white"
      id="project"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
        <h1 className="text-5xl text-center font-extrabold leading-tight">
            My <span style={{ color: '#F2BE21' }}>Project</span>
          </h1>
          <p className="text-gray-300 mt-4">
            Explore some of my best works showcasing creative and functional designs.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              image: image2,
              title: "Netflix Clone",
              link: "https://github.com/http-bala/netfilx-clone",
              span: "row-span-2",
            },
            {
              image: image3,
              title: "Field Visit Management System",
              link: "https://github.com/http-bala/BCA_finalYearProject",
              span: "",
            },
            {
              image: image4,
              title: "Spotify Clone",
              link: "https://deluxe-cheesecake-9ca38c.netlify.app/",
              span: "",
            },
            {
              image: image5,
              title: "Video Streaming Website",
              link: "https://github.com/http-bala/Tvflix_php",
              span: "col-span-2",
            },
            {
              image: image1,
              title: "WordPress E-Commerce",
              link: "https://canaknaturecare.in/",
              span: "",
            },
            {
              image: image,
              title: "PHP Static Website",
              link: "https://enlighteneddigital.in/maa/Maa_Packageing_home",
              span: "",
            },
          ].map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-lg ${project.span}`}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white text-center">
                  {project.title}
                </h3>
              </div>
              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-lg group-hover:shadow-[0_0_30px_15px_rgba(255,255,255,0.3)] transition-shadow duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
