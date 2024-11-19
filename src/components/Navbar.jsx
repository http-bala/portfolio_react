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
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSidebarDropdown = () => setSidebarDropdownOpen(!sidebarDropdownOpen);

  return (
    <nav className="relative bg-gradient-to-tl from-purple-900 to-purple-600 border-b shadow-lg py-3">
      <div className="md:max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-bold text-yellow-400 flex items-center">
          BALAKRISHNA
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden z-50">
          {!navOpen ? (
            <FaBars size={24} color="#FFFFFF" onClick={toggleNav} />
          ) : (
            <FaTimes size={24} color="#FFFFFF" onClick={toggleNav} />
          )}
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center space-x-6 text-white text-lg font-semibold">
          <AnchorLink
            href="#home"
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </AnchorLink>
          <AnchorLink
            href="#about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </AnchorLink>
          <AnchorLink
            href="#services"
            className="hover:text-yellow-400 transition duration-300"
          >
            Services
          </AnchorLink>
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              className="hover:text-yellow-400 transition duration-300 flex items-center"
            >
              Projects
            </button>
            <ul
              className={`absolute bg-gradient-to-tl from-purple-500 to-fuchsia-600 text-white p-2 rounded shadow-lg w-[200px] transform ${
                dropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
              } transition-all duration-300 origin-top`}
            >
              <li className="py-2 px-2 hover:text-yellow-400">
                <AnchorLink href="#project1">Project 1</AnchorLink>
              </li>
              <li className="py-2 px-2 hover:text-yellow-400">
                <AnchorLink href="#project-design">Project Design</AnchorLink>
              </li>
            </ul>
          </div>
          <AnchorLink
            href="#contact"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </AnchorLink>
        </ul>

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-700"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Full-Screen Sidebar for Mobile */}
      <div
        className={`fixed inset-0 bg-gradient-to-tl from-purple-900 to-purple-600 text-white z-40 transform ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-6 text-lg font-semibold">
          <AnchorLink
            href="#home"
            className="hover:text-yellow-400 transition duration-300"
            onClick={toggleNav}
          >
            Home
          </AnchorLink>
          <AnchorLink
            href="#about"
            className="hover:text-yellow-400 transition duration-300"
            onClick={toggleNav}
          >
            About
          </AnchorLink>
          <AnchorLink
            href="#services"
            className="hover:text-yellow-400 transition duration-300"
            onClick={toggleNav}
          >
            Services
          </AnchorLink>
          <div className="relative">
            <p
              onClick={toggleSidebarDropdown}
              className="mx-6 hover:text-yellow-400 transition duration-300"
            >Projects
            </p>
            <ul
              className={`text-center overflow-hidden transition-all duration-300 ${
                sidebarDropdownOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <li className="py-2">
                <AnchorLink
                  href="#project1"
                  className="hover:text-yellow-400 transition duration-300"
                  onClick={toggleNav}
                >
                  Project 1
                </AnchorLink>
              </li>
              <li className="py-2">
                <AnchorLink
                  href="#project-design"
                  className="hover:text-yellow-400 transition duration-300"
                  onClick={toggleNav}
                >
                  Project Design
                </AnchorLink>
              </li>
            </ul>
          </div>
          <AnchorLink
            href="#contact"
            className="hover:text-yellow-400 transition duration-300"
            onClick={toggleNav}
          >
            Contact
          </AnchorLink>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube size={28} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FaWhatsapp size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
