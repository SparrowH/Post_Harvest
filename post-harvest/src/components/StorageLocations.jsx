import React from 'react'
import SearchBar from './SearchBar'
import StorageCard from './StorageCard'
import Sunfresh from '../assets/sunfresh.png'
import AgriSafe from '../assets/AgriSafe.png'
import GreenField from '../assets/GreenField.png'
import Chevron from '../assets/chevronRight.png'



function StorageLocations() {
  return (
    <section class=' flex flex-col justify-center items-center my-20' id='storagecenters'>
        <div class='flex justify-center'>
            <p class='text-[36px]'>Find Reliable Storage Near You!</p>
        </div>
        <div class='my-10' >
            <p class='text-[20px] text-[#757575] w-[670px] -indent-15 flex '>Protect your harvest with trusted storage facilities.
            Search by location, crop type, and storage method to keep your produce fresh for longer.</p>
        </div>
        <div class='w-full h-[64px] flex justify-center '>
            <SearchBar/>
        </div>
        <div class='flex w-[1152px] justify-around py-10 ' >
            <StorageCard imageUrl={Sunfresh} location='Keta, Volta Region' title='SunFresh Cold Storage' rating={4.5} capacity='500 Tons' class='' />
            <StorageCard imageUrl={AgriSafe} location='Bolgatanga, Upper-East Region' title='SunFresh Cold Storage' rating={4.0} capacity='1,200 Tons'/>
            <StorageCard imageUrl={GreenField} location='Kumasi, Ashanti Region' title='SunFresh Cold Storage' rating={3.5} capacity='300 Tons'/>
        </div>
       
        <div class='flex items-center justify-center'>
            <a class='text-[20px] text-[#007F5F] mr-4'>Find Storage Centers</a>
            <img class='h-[15px]' src={Chevron} alt="Chevron right" />    
        </div>
    </section>
  )
}

export default StorageLocations