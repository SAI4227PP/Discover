import React from 'react'
import VacationHero from '../components/VacationHero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const Vacation = () => {
  return (
    <div>
      <Navbar/>
       <VacationHero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
      <Footer/>
    </div>
  )
}

export default Vacation
