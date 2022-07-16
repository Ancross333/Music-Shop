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
          onClick={() => document.title = "Instruments"}
          className='sidebarLink'
        >
          Instruments
        </Link>

        <Link 
          to = '/Music-Shop/Products/Accessories'
          onClick={() => document.title = "Accessories"}
          className='sidebarLink'
        >
          Accessories
        </Link>

        <Link 
          to = '/Music-Shop/Products/Music'
          onClick={() => document.title = "Music"}
          className='sidebarLink'
        >
          Music
        </Link>

        <Link 
          to = '/Music-Shop/Products/Posters'
          onClick={() => document.title = "Posters"}
          className='sidebarLink'
        >
          Posters
        </Link>
      </div>
    </div>
  )
}
