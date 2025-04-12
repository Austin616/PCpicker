import React from 'react'
import Hero from '../components/Hero'
import LogoWall from '../components/LogoWall'
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div className="">
      <Hero />
      <LogoWall />
      <Stats />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home
