import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from '../../Screens/LandingPage'
import ProductsHome from '../../Screens/ProductsHome'

export default function Routing() {
  return (
    <div className='routingContainer'>
      <Routes>
        <Route exact path = '/Music-Shop' element={<LandingPage />} />
        <Route path = '/Music-Shop/Products/:type' element={<ProductsHome />} />
      </Routes>
    </div>
  )
}
