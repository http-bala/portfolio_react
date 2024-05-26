import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { FaServer } from "react-icons/fa";


const Services = () => {
   return (
      <div className=' sm:flex items-center justify-center max-w-screen-xl gap-5 m-auto px-5 mb-10' id="service">
         {/* service */}
         <div className="sm:p-2 md:p-4 p-5 mb-7 flex-1 h-[100%] rounded-lg bg-white/20 shadow-lg text-white flex flex-col items-center ">
            <MdDesignServices size={50} />
            <div className="mt-8">
               <h3 className='font-bold text-xl text-center'>Web-designing</h3>
               <p className='text-center'>"Designing visually appealing and user-friendly websites is my passion. I craft sites that not only look great but also offer a seamless user experience, tailored to your brand and goals."</p>
            </div>
         </div>
         {/* service */}
         {/* service */}
         <div className="sm:p-2 md:p-4 p-5 mb-7 flex-1 h-[100%] rounded-lg bg-white/20 shadow-lg text-white flex flex-col items-center">
            <MdSettingsApplications size={50} />
            <div className="mt-8">
               <h3 className='font-bold text-xl text-center'>Web based Application</h3>
               <p className='text-center'> web-based applications that are tailored to meet your business needs.A simple content management systems to complex business applications, I provide solutions that are scalable, secure, and efficient</p>
            </div>
         </div>
         {/* service */}
         {/* service */}
         <div className="sm:p-2 md:p-4 p-5 mb-7 flex-1 h-[100%] rounded-lg bg-white/20 shadow-lg text-white flex flex-col items-center">
            <FaServer size={50} />
            <div className="mt-8">
               <h3 className='font-bold text-xl text-center'>backend development</h3>
               <p className='text-center'>Strong backend systems are the backbone of any successful web application. I specialize in building reliable and efficient backends that ensure your application runs smoothly.</p>
            </div>
         </div>
         {/* service */}
      </div>
   )
}

export default Services