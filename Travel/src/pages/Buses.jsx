import React from 'react'

import BusBooking from '../components/BusBooking'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import HotelsHero from '../components/HotelsHero'
import BusForm from '../components/BusForm'
import BusCard from '../components/BusCard'




const BUSES = () => {
  return (
    <div>
      <HotelsHero/>
    
      <BusForm/>
      
      
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default BUSES
