import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickLinks from './components/QuickLinks'
import AboutUs from './components/AboutUs'
import StorageTips from './components/StorageTips'
import StorageLocations from './components/StorageLocations'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <QuickLinks/>
      <AboutUs/>
      <StorageTips/>
      <StorageLocations/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App