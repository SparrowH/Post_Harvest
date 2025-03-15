import React from 'react'
import AboutImage from '../assets/AboutUs.png'
import Chevron from '../assets/chevronRight.png'

function AboutUs() {
  return (
    <div class='h-[490px] grid grid-cols-2 gap-2 px-36'>
        <div class='w-[452px] h-[334px] rounded-3xl'>
            <img src={AboutImage} alt='About Image'/>
        </div>
        <div >
            <p class='text-[24]'>About us</p>
            <p>Crop Care Solutions</p>
            <p>
             At Crop Care Solutions, we empower farmers with the knowledge and tools they need to reduce
             post-harvest losses and increase profits. 
             Our mission is to ensure that every farmer can store, preserve, and transport crops effectively,
             reducing waste and improving food security. 
            </p>

            <div>
                <a href="">Learn More About Us </a>
                <img src={Chevron} alt="Chevron right" />
            </div>
        </div>
    </div>
  )
}

export default AboutUs