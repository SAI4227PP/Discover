import React from 'react'


import HotelsHero from '../components/HotelsHero'
import BestSeller from '../components/BestSeller'



import FlightBookingForm from '../components/newflight/FlightForm'
import HotelSearch from '../components/NewHotels/HotelSearch'


const Flights = () => {
  return (
    <div>
      <HotelsHero/>
     
      <FlightBookingForm/>
      
      
      
      <BestSeller/>
    </div>
  )
}

export default Flights
