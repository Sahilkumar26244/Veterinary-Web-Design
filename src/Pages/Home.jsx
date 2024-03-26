import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import VideoSection from '../Components/VideoSection'
import DoctorSection from '../Components/DoctorSection'
import Video2Section from '../Components/Video2Section'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <VideoSection/>
        <DoctorSection/>
        <Video2Section/>
        <Footer/>
    </div>
  )
}

export default Home