import React from 'react'
import '../../CSS/ProductsHome.css'
import ProductDisplay from '../Sections/Products Home/Sections/ProductDisplay'
import ProductsSidebar from '../Sections/Products Home/Sections/ProductsSidebar'

export default function ProductsHome() {
  return (
    <div className='productsHomeContainer'>
      <ProductsSidebar />
      
      <ProductDisplay />
    </div>
  )
}
