import React from 'react'

import BusBooking from '../components/BusBooking'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import HotelsHero from '../components/HotelsHero'
import BusForm from '../components/BusForm'
import BusCard from '../components/BusCard'
import BusDetails from '../components/BusDetails'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'




const BUSES = () => {
  return (
    <div>
      <Navbar/>
      <HotelsHero/>
    
      <BusForm/>
      <BusDetails/>
      
      
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
      <Footer/>
    </div>
  )
}

export default BUSES
