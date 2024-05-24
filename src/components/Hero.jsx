import React from 'react'
import Avtar_image from './assets/Avtar_image.jpg'
import { FaGithub } from "react-icons/fa";

const Hero = () => {
    return (

        <section className="text-white">
            <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1
                        className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                        I'<span className='text-purple-600'>M</span> <br />Full Stack Developer
                    </h1>

                    <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I am a full stack developer skilled in HTML, CSS, JavaScript. I use frameworks like React, Laravel, Tailwind CSS, and Express, and work with PHP and Node.js for server-side development. I create dynamic and responsive web applications, focusing on efficient and innovative solutions.
                    </p>

                    <div className="flex gap-2">
                    <a href="mailto:balakrishnakolla00014@gmail.com?subject=Can%20you%20be%20a%20part%20for%20my%20company,%20hiring%20Inquery"><button className='px-5 py-2 font-semibold bg-purple-600 rounded'>Hire Me</button></a>
                   <a href="https://github.com/http-bala" target='_blank'> <button className='px-5 py-2 font-semibold bg-purple-600 rounded flex items-center gap-2'><FaGithub size={20}/>Github</button></a>
                    </div>
                </div>

                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={Avtar_image} className='rounded-full shadow-lg shadow-purple-400 ' alt="hero image" />
                </div>
            </div>
        </section>
    )
}

export default Hero