import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SkillsSection from './components/SkillsSection'

const App = () => {
  return (
    <div className='bg-black'>
      <Hero/>
      <About/>
      {/* <Title name={"Service"}/> */}
      <Services/>
      <SkillsSection/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App