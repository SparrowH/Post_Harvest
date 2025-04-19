import React from 'react'
import tomato from '../assets/Tomato.png'
import maize from '../assets/Maize.png'
import onion from '../assets/Onions.png'
import yams from '../assets/Yams.png'
import Chevron from '../assets/chevronRight.png'


function StorageTips() {
  return (
    <section class='px-[160px]'>
        <div class='flex justify-center text-[36px] '>
           <h3>Smart Storage Tips to Keep Your Harvest Fresh!</h3> 
        </div>

        <div class='flex  text-[#757575]  justify-center'>
            <div class='w-[670px] -indent-15'>
            <p>Discover expert-recommended techniques to store your crops longer, prevent spoilage, and maximize profits.
            Explore guides tailored for different crops and storage methods!</p>
            </div>
        </div>

        <div class='flex justify-center flex-column items-center '>
            <div>
                <button class='w-[464px] h-[424px]'>
                    <img class='w-full rounded-md' src={tomato} alt="Tomato card" />
                </button>
                <button class='w-[464px] h-[424px] rounded-md '>
                    <img class='w-full rounded-md'src={maize} alt="Maize card" />
                </button>
            </div>
            
            <div
            >
                <button class='w-[464px] h-[424px] rounded-md'>
                    <img class='w-full rounded-md' src={onion} alt="Onion card" />
                </button>
                <button class='w-[464px] h-[424px] rounded-md'>
                    <img class='w-full rounded-md' src={yams} alt="yams card" />
                </button>
            </div>   
        </div>

        <div class='flex items-center justify-center'>
            <a class='text-[20px] text-[#007F5F] mr-4'>View All Storage Guides</a>
            <img class='h-[15px]' src={Chevron} alt="Chevron right" />    
        </div>
    </section>
  )
}

export default StorageTips