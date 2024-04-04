import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Pricing/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App