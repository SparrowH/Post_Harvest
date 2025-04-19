import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickLinks from './components/QuickLinks'
import AboutUs from './components/AboutUs'
import StorageTips from './components/StorageTips'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <QuickLinks/>
      <AboutUs/>
      <StorageTips/>
    </div>
  )
}

export default App