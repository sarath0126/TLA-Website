import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollContent from './components/ScrollContent'
import CourseCards from './components/CourseCards'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ScrollContent/>
      <CourseCards/>
      <Footer/>
    </div>
  )
}

export default App