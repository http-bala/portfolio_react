import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-tl from-purple-900 via-purple-800 to-purple-700">
            <div className="container max-w-screen-xl mx-auto px-6  py-8">
                {/* Logo Section */}
                <div className="flex justify-center mb-8">
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {/* Solutions Section */}
                    <div className="box">
                        <h4 className="text-white font-semibold mt-8 mb-5">Solutions</h4>
                        <ul>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">Control</li>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">Scalability & Effciency</li>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">Supported by Experts</li>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">Performance & Security</li>
                        </ul>
                    </div>

                    {/* Links Section */}
                    <div className="box">
                        <h4 className="text-white font-semibold mt-8 mb-5">Links</h4>
                        <ul>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">Home</li>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">About</li>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">Services</li>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">Work</li>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">Journey</li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="box">
                        <h4 className="text-white font-semibold mt-8 mb-5">Resources</h4>
                        <ul>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">Case Studies</li>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">Blog</li>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">I'm a Clients</li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="box">
                        <h4 className="text-white font-semibold mt-8 mb-5">Company</h4>
                        <ul>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">About Us</li>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">Careers</li>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">Newsroom</li>
                            <li className="text-white opacity-50 mb-2 cursor-pointer transition duration-500 hover:text-accent hover:opacity-100">Contact Us</li>
                        </ul>
                    </div>

                    {/* Contact and Social Icons Section */}
                    <div className="box">
                        <div className="text bg-accent p-3 pr-8 rounded-br-[50px] rounded-tl-[50px] text-right text-black mt-8">
                            <span>+91 8154954408    </span><br />
                            <label className="block">devops@balakrishna.site</label>
                            <p>Daman & diu, bhimpore Nani daman</p>
                        </div>
                        <div className="icon flex space-x-4 mt-8 text-white">
            <FaFacebookF 
                className="cursor-pointer text-[20px] transition duration-500 hover:text-[#20C863]" 
            />
            <FaInstagram 
                className="cursor-pointer text-[20px] transition duration-500 hover:text-[#20C863]" 
            />
            <FaYoutube 
                className="cursor-pointer text-[20px] transition duration-500 hover:text-[#20C863]" 
            />
            <FaTwitter 
                className="cursor-pointer text-[20px] transition duration-500 hover:text-[#20C863]" 
            />
            <FaLinkedinIn 
                className="cursor-pointer text-[20px] transition duration-500 hover:text-[#20C863]" 
            />
        </div>
                    </div>
                </div>

                {/* Legal Section */}
                <div className="legal flex flex-col sm:flex-row justify-between items-center mt-4 text-white text-sm">
                    <p>Copyright (c) 2021 Copyright Holder All Rights Reserved.</p>
                    <div className="flex space-x-4">
                        <p className="cursor-pointer hover:text-[#20C863]">Privacy Policy</p>
                        <p className="cursor-pointer hover:text-[#20C863]">Terms of Use</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
