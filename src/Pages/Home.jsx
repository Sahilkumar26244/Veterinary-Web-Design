import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import VideoSection from '../Components/VideoSection'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <VideoSection/>
        <Footer/>
    </div>
  )
}

export default Home