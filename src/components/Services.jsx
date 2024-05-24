import React from 'react'
import { SiExcalidraw } from "react-icons/si";
import { ImFilePicture } from "react-icons/im";
import { TbSeo } from "react-icons/tb";


const Services = () => {
  return (
    <div className=' sm:flex items-center justify-center max-w-screen-xl gap-5 m-auto px-5 mb-10' id="service">
       {/* service */}
       <div className="sm:p-10 p-5 mb-7  rounded-lg bg-white/10 shadow-lg text-white flex flex-col items-center">
       <SiExcalidraw size={50} />
         <div className="mt-8">
            <h3 className='font-bold text-xl text-center'>Web-designing</h3>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, facere.</p>
         </div>
      </div>
      {/* service */}
       {/* service */}
       <div className="sm:p-10 p-5 mb-7  rounded-lg bg-white/10 shadow-lg text-white flex flex-col items-center">
       <ImFilePicture size={50} />
         <div className="mt-8">
            <h3 className='font-bold text-xl text-center'>Web-designing</h3>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, facere.</p>
         </div>
      </div>
      {/* service */}
       {/* service */}
       <div className="sm:p-10 p-5 mb-7  rounded-lg bg-white/10 shadow-lg text-white flex flex-col items-center">
       <TbSeo size={50} />
         <div className="mt-8">
            <h3 className='font-bold text-xl text-center'>Web-designing</h3>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, facere.</p>
         </div>
      </div>
      {/* service */}
      
      
       


    </div>
  )
}

export default Services