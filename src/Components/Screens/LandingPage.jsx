import React from 'react'
import '../../CSS/LandingPage.css'
import Products from '../Sections/Landing Page/Products'
import TitleCard from '../Sections/Landing Page/TitleCard'
export default function LandingPage() {
  return (

    <div className='landingPageContainer'>
      <TitleCard />
      <Products />
    </div>
  )
}
