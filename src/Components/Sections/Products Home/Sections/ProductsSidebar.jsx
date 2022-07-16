import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductsSidebar() {
  return (
    <div className='sidebarContainer'>
      <div className='sidebarHeader'>
        <h2>Categories</h2>
      </div>

      <div className='sidebarLinks'>
        <Link 
          to = '/Music-Shop/Products/Instruments'
          className='sidebarLink'
        >
          Instruments
        </Link>

        <Link 
          to = '/Music-Shop/Products/Accessories'
          className='sidebarLink'
        >
          Accessories
        </Link>

        <Link 
          to = '/Music-Shop/Products/Music'
          className='sidebarLink'
        >
          Music
        </Link>

        <Link 
          to = '/Music-Shop/Products/Posters'
          className='sidebarLink'
        >
          Posters
        </Link>
      </div>
    </div>
  )
}
