import React, { useState } from 'react'
import logo from '../assets/Logo.png'

function Navbar() {
    const [toggle, setToggle] = useState(false)
  return (
    <nav class="md:w-full lg:w-full h-[68px] justify-around bg-linear-to-r from-sky-green to-summar-green items-center flex flex-row ">
        <div class="lg:w-[79px] lg:h-[56px] md:w-[66px] md:[48px] sm:w-[55px] sm:[40px]">
            <img src={logo} class="w-full h-full" alt="Crop-care logo"/>
        </div>

        <div class="lg:w-[605px] lg:h-[20px] md:w-[514px] md:w-[17px] items-center">
            <ul class="flex flex-row justify-around">
                <li><a class='' href="">STORAGE TIPS</a></li>
                <li><a class='' href="">VIDEOS</a></li> 
                <li><a class='' href="">STORAGE CENTERS</a></li>
                <li><a class='' href="">NEWS</a></li>
                <li><a class='' href="">ABOUT US</a></li>
            </ul>
        </div>
        <div class="w-[272px] h-[48px] justify-between">
            <button class="bg-transparent w-[132px] h-[48px] rounded-[48px] cursor-pointer">
                <p>Log In</p>
            </button>
            <button class="cursor-pointer">
                Register 
            </button>
        </div>
    </nav>
  )
}

export default Navbar