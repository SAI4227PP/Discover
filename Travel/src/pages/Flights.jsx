import React from 'react'


import HotelsHero from '../components/HotelsHero'
import BestSeller from '../components/BestSeller'



import FlightBookingForm from '../components/newflight/FlightForm'
import FlightList from '../components/newflight/FlightList'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Flights = () => {
  return (
    <div>
      <Navbar/>
      <FlightBookingForm/>
      <FlightList/>
      <BestSeller/>
      <Footer/>
    </div>
  )
}

export default Flights
