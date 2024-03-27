import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import VideoSection from '../Components/VideoSection'
import DoctorSection from '../Components/DoctorSection'
import Video2Section from '../Components/Video2Section'
import DogCategories from '../Components/DogCategories'
import VetcareSection from '../Components/VetcareSection'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <VideoSection/>
        <DoctorSection/>
        <Video2Section/>
        <DogCategories/>
        <VetcareSection/>
        <Footer/>
    </div>
  )
}

export default Home