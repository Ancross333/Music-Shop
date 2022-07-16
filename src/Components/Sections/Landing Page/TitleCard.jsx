import React from 'react'
import { Link } from 'react-router-dom'
import mainImage from '../../../Assets/mainImage.jpg'

export default function TitleCard() {
  return (
    <div className='titleCardContainer'>
        <div className='titleCardMain'>
          <div className='titleHeader'>
            <h1>Unlock Your Musical Potential With High Quality Equipment</h1>
            <h2>We provide all things music</h2>
          </div>
          
          <Link to='/Music-Shop/Products/Instruments' className='bigButton noMargin landButton navLink'>
            Browse Store
          </Link>
        </div>

        <div className='titleImageContainer'>
          <img src={mainImage} alt='Guitar on Display' />
        </div>
    </div>
    
  )
}
