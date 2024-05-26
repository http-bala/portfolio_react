import React from 'react'
import image from './assets/project_image/image.png'
import image1 from './assets/project_image/image1.png'
import image2 from './assets/project_image/image2.png'
import image3 from './assets/project_image/image3.png'
import image4 from './assets/project_image/image4.png'
import image5 from './assets/project_image/image5.png'

const Project = () => {
    return (
        <div className='max-w-screen-xl m-auto' id="project">
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div class="sm:flex flex-wrap md:-m-2">
                    <div class="flex sm:w-1/3 flex-wrap">
                        <a href="https://enlighteneddigital.in/maa/Maa_Packageing_home">
                            <div class="w-full h-[250px] p-1 md:p-2 relative group">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-left"
                                    src={image} />
                                <div className='absolute inset-1 md:inset-2  bg-black bg-opacity-70 opacity-0 transition-opacity flex flex-col items-center justify-center rounded-lg group-hover:opacity-100'>
                                    <h1 className='text-white text-3xl'>PHP STATIC WEBSITE</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="flex sm:w-1/3 flex-wrap">
                        <a href="https://canaknaturecare.in/">
                            <div class="w-full  h-[250px] p-1 md:p-2 relative group">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src={image1} />
                                <div className='absolute inset-1 md:inset-2  bg-purple-900 bg-opacity-40 opacity-0 transition-opacity flex items-center justify-center rounded-lg group-hover:opacity-100'>
                                <h1 className='text-white text-2xl'>Wordpress E-COMMERCE</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="flex sm:w-1/3 flex-wrap">
                        <a href="https://github.com/http-bala/netfilx-clone">
                            <div class="w-full h-[250px] p-1 md:p-2 relative group">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src={image2} />
                                <div className='absolute inset-1 md:inset-2  bg-purple-900 bg-opacity-40 opacity-0 transition-opacity flex items-center justify-center rounded-lg group-hover:opacity-100'>
                                <h1 className='text-white text-3xl'>NETFLIX CLONE</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="flex sm:w-1/3 flex-wrap">
                        <a href="https://github.com/http-bala/BCA_finalYearProject">
                            <div class="w-full h-[250px] p-1 md:p-2 relative group">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-fit object-center"
                                    src={image3} />
                                <div className='absolute inset-1 md:inset-2  bg-purple-900 bg-opacity-40 opacity-0 transition-opacity flex items-center justify-center rounded-lg group-hover:opacity-100'>
                                <h1 className='text-white text-3xl text-center'>FIELD VIST MANAGEMENT SYSYTEM</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="flex sm:w-1/3 flex-wrap">
                        <a href="https://deluxe-cheesecake-9ca38c.netlify.app/">
                            <div class="w-full  h-[250px] p-1 md:p-2 relative group">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src={image4} />
                                <div className='absolute inset-1 md:inset-2  bg-purple-900 bg-opacity-40 opacity-0 transition-opacity flex items-center justify-center rounded-lg group-hover:opacity-100'>
                                <h1 className='text-white text-3xl text-center'>SPOTIFY CLONE</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="flex sm:w-1/3 flex-wrap">
                        <a href="https://github.com/http-bala/Tvflix_php">
                            <div class="w-full p-1  h-[250px] md:p-2 relative group">
                                <img
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center"
                                    src={image5} />
                                <div className='absolute inset-1 md:inset-2  bg-purple-900 bg-opacity-40 opacity-0 transition-opacity flex items-center justify-center rounded-lg group-hover:opacity-100'>
                                <h1 className='text-white text-3xl text-center '>VIDEO STREAMING WEBSITE</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project