import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [Nav, setNav] = useState(true);

  const handleClick = () => setNav(false);
  const handleCloseClick = () => setNav(true);

  return (
    
    <nav
      className="relative bg-cover  border-b bg-center bg-no-repeat backdrop-blur-lg shadow-lg py-3"
    >
      <div className="md:max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-bold text-accent flex items-center">
          {/* <img src="/path-to-your-logo.png" alt="Logo" className="h-8 mr-2" /> */}
          BALAKRISHNA
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          {Nav ? (
            <FaBars size={24} color="#FFFFFF" onClick={handleClick} />
          ) : (
            <FaTimes size={24} color="#FFFFFF" onClick={handleCloseClick} />
          )}
        </div>

        {/* Nav Links */}
        <ul
          className={`absolute md:static top-16 left-0 md:top-0 w-full md:w-auto bg-white/10 md:bg-transparent backdrop-blur-md transition-transform duration-500 ${
            Nav ? "hidden md:flex" : "block"
          } flex-col md:flex-row items-center justify-center text-white`}
        >
          <AnchorLink href="#home" className="mx-4 text-lg font-semibold hover:text-accent transition duration-300">
            Home
          </AnchorLink>
          <AnchorLink href="#about" className="mx-4 text-lg font-semibold hover:text-accent transition duration-300">
            About
          </AnchorLink>
          <AnchorLink href="#services" className="mx-4 text-lg font-semibold hover:text-accent transition duration-300">
            Service
          </AnchorLink>
          <AnchorLink href="#team" className="mx-4 text-lg font-semibold hover:text-accent transition duration-300">
            Team
          </AnchorLink>

          {/* Projects Dropdown */}
          <div className="relative group mx-4">
            <button className="text-lg font-semibold hover:text-accent transition duration-300">
              Projects
            </button>
            <ul
              className="absolute hidden group-hover:block bg-gradient-to-tl from-purple-500 to-fuchsia-600 text-white p-2 rounded shadow-lg w-[200px] transition-all duration-300"
              style={{ borderRadius: "8px" }}
            >
              <li className="relative group py-2 px-2 font-bold hover:border-b hover:text-accent hover:px-4 transition-all duration-300">
                <AnchorLink href="#projects" className="flex items-center">
                  Project 1
                </AnchorLink>
              </li>
              <li className="relative group py-2 px-2 font-bold hover:border-b hover:text-accent hover:px-4 transition-all duration-300">
                <AnchorLink href="#project-design" className="flex items-center">
                  Project Design
                </AnchorLink>
              </li>
            </ul>
          </div>

          {/* Contact Button */}
          <AnchorLink
            href="#contact"
           className="mx-4 text-lg font-semibold hover:text-accent transition duration-300"
          >
            Contact
          </AnchorLink>
        </ul>

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white  hover:text-pink-500">
            <FaInstagram size={28} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black">
            <FaGithub size={28} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
            <FaYoutube size={28} />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lime-400">
            <FaWhatsapp size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
