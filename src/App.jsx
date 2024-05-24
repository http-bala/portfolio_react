import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Title from './components/Title'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-gradient-to-b from-slate-900 to-purple-900'>
      <Navbar/>
      <Hero/>
      <About/>
      <Title name={"Service"}/>
      <Services/>
      <Title name={"Project"}/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App