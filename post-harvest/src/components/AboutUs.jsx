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
            <p class='text-[24px] text-[#AACC00] "font-[Montserrat500]'>About us</p>
            <p class='text-[48px] text-[#007F5F] '>Crop Care Solutions</p>
            <p class='text-[20px] text-[#757575]'>
             At Crop Care Solutions, we empower farmers with the knowledge and tools they need to reduce
             post-harvest losses and increase profits. 
             Our mission is to ensure that every farmer can store, preserve, and transport crops effectively,
             reducing waste and improving food security. 
            </p>

            <div class='flex my-10 w-[254px] items-center'>
                <a class='text-[20px] text-[#007F5F] mr-3' href="">Learn More About Us </a>
                <img class='h-[16px]' src={Chevron} alt="Chevron right" />
            </div>
        </div>
    </div>
  )
}

export default AboutUs