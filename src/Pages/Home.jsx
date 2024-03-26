import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import VideoSection from '../Components/VideoSection'
import DoctorSection from '../Components/DoctorSection'
import Video2Section from '../Components/Video2Section'
import DogCategories from '../Components/DogCategories'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <VideoSection/>
        <DoctorSection/>
        <Video2Section/>
        <DogCategories/>
        <Footer/>
    </div>
  )
}

export default Home