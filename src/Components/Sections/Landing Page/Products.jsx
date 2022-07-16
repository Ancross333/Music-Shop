import React from 'react'
import Product from '../../Templates/Landing Page/Product'
import guitarIcon from '../../../Assets/Guitar.png'
import guitarPickIcon from '../../../Assets/guitarPick.png'
import posterIcon from '../../../Assets/poster.png'
import cdIcon from '../../../Assets/CD.png'

export default function Products() {
  return (
    <div className='productsContainer'>
      <Product 
        image={guitarIcon}
        description='High Quality Instruments'
        alt='Guitar'
      />

      <Product 
        image={guitarPickIcon}
        description='Low Priced Accessories'
        alt='Guitar Pick'
      />

      <Product 
        image={cdIcon}
        description='Classic CDs'
        alt='CD Icon'
      />

      <Product 
        image={posterIcon}
        description='Beautiful Posters'
        alt='Poster Icon'
      />


    </div>
  )
}
