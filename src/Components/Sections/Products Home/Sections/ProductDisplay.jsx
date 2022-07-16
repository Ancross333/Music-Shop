import React from 'react'
import Instruments from '../Product Lists/Instruments'
import { useParams } from 'react-router-dom'
import Accessories from '../Product Lists/Accessories';
import Music from '../Product Lists/Music';
import Posters from '../Product Lists/Posters';

export default function ProductDisplay({setBuyModalOpen}) {

  const { type } = useParams();
  return (
    <div className='productDisplayContainer'>
      {type === 'Instruments' && <Instruments />}
      {type === 'Accessories' && <Accessories />}
      {type === 'Music' && <Music />}
      {type === 'Posters' && <Posters />}
    </div>
  )
}
