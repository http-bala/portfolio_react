import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [Nav, setNav] = useState(true)

  const handleClick = () => {
   setNav(false)
  }
  const handlecloseClick = () => {
    setNav(true)
  }
  return (
    <nav className='md:max-w-screen-xl m-auto p-4 md:p-0 z-100  md:flex md:items-center md:justify-between cursor-pointer'>
      <div className='flex items-center justify-between'>
        <span className='text-2xl text-purple-500'>
          Balakrishna
        </span>
        <span className='cursor-pointer md:hidden block'>
        {
          Nav ? 
            <FaBars color='white' onClick={handleClick} />
          : 
            <FaTimes  color='white' onClick={handlecloseClick} />
        }
        </span>
      </div>
      <ul className={`md:flex md:items-center z-[1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 bg-gradient-to-b from-slate-900 to-purple-900 sm:bg-none ${Nav ? "top-[-400px]" : "top-[70px] " }   transition-all ease-in duration-500`}>
       <AnchorLink href='#home'> <li className='text-xl hover:text-white text-purple-500 duration-500 mx-5 my-6 md:y-0'>Home</li> </AnchorLink>
       <AnchorLink href='#about'> <li className='text-xl hover:text-white  text-purple-500 duration-500 mx-5 my-6 md:y-0'>About</li> </AnchorLink>
       <AnchorLink href='#service'> <li className='text-xl hover:text-white text-purple-500 duration-500 mx-5 my-6 md:y-0'>Service</li></AnchorLink>
       <AnchorLink href='#project'> <li className='text-xl hover:text-white text-purple-500 duration-500 mx-5 my-6 md:y-0'>Project</li></AnchorLink>
       <AnchorLink href='#contact'> <li className='text-xl hover:text-white text-purple-500 duration-500 mx-5 my-6 md:y-0'>Contact</li></AnchorLink>
      </ul>
    </nav>
  )
}

export default Navbar