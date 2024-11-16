import React, { useState } from 'react';
import Avtar_image from './assets/hero-image1.png';
import { FaGithub } from "react-icons/fa";
import Navbar from './Navbar';
import { motion } from 'framer-motion';  // For animation

const Hero = () => {
    // State for mouse movement to interact with image
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Handle mouse movement
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
    };

    return (
        <>
            <section
                className="text-white bg-gradient-to-tl from-purple-900 via-purple-700 to-purple-600 h-[100vh]"
                onMouseMove={handleMouseMove} // Add mouse move listener
            >
                <Navbar />
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    {/* Left Section: Text and Buttons */}
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <motion.h1
                            className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            I'<span className='text-accent'>M</span> <br /> Full Stack Developer
                        </motion.h1>

                        <motion.p
                            className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4, ease: "easeOut" }}
                        >
                            I am a full stack developer skilled in HTML, CSS, JavaScript. I use frameworks like React, Laravel, Tailwind CSS, and Express, and work with PHP and Node.js for server-side development. I create dynamic and responsive web applications, focusing on efficient and innovative solutions.
                        </motion.p>

                        <div className="flex gap-4">
                            <a href="mailto:balakrishnakolla00014@gmail.com?subject=Can%20you%20be%20a%20part%20for%20my%20company,%20hiring%20Inquery">
                                <button className='px-6 py-3 font-semibold text-white bg-accent rounded-lg hover:bg-gray-100 hover:text-black hover:shadow-2xl hover:shadow-purple-500/70 transition-all'>
                                    Hire Me
                                </button>
                            </a>
                            <a href="https://github.com/http-bala" target='_blank'>
                                <button className='px-6 py-3 font-semibold text-white bg-accent rounded-lg flex items-center gap-2 hover:bg-gray-100 hover:text-black hover:shadow-2xl hover:shadow-purple-500/70 transition-all'>
                                    <FaGithub size={20} /> Github
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Right Section: Image with Mouse Interaction */}
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            <img
                                src={Avtar_image}
                                alt="hero image"
                                className="transition-transform duration-500 ease-out"
                                style={{
                                    width: "800px",
                                    transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.05}px, ${(mousePosition.y - window.innerHeight / 2) * 0.05}px)`, // Moving the image based on mouse position
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
