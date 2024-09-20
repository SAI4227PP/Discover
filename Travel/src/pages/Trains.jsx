import React from 'react'
import HotelsHero from '../components/HotelsHero'
import OurPolicy from '../components/OurPolicy'

import TrainResult from '../pages/TrainResults'
import BestSeller from '../components/BestSeller'
import TrainForm from '../components/TrainForm'
import TrainDetails from '../components/TrainDetails'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'








const Trains = () => {
  return (
    <div>
      
      <Navbar/>
      <TrainForm/>
      
      <BestSeller/>
      <OurPolicy/>
      <Footer/>
    </div>
  )
}

export default Trains
