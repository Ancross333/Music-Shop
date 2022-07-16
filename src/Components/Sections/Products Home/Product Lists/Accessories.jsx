import React from 'react'
import ProductForSale from '../../../Templates/Products/ProductForSale'
import fenderPicks from '../../../../Assets/fenderPicks.png'
import gibsonPicks from '../../../../Assets/gibsonPicks.png'
import herdiumPicks from '../../../../Assets/herdiumPicks.png'
import ten46Strings from '../../../../Assets/10-46Strings.png'
import nine42Strings from '../../../../Assets/9-42Strings.png'
import ten52Strings from '../../../../Assets/10-52Strings.png'
import fenderTuner from '../../../../Assets/fenderTuner.png'
import joyoTuner from '../../../../Assets/joyoTuner.png'
import snarxTuner from '../../../../Assets/snarxTuner.png'

export default function Accessories() {
  return (
    <div className='productsForSaleContainer'>
      
      <ProductForSale 
        title='Fender 351 Medium Shaped Picks 12 Pack'
        description='A pack of 12 Fender 351 medium shaped guitar picks'
        image={fenderPicks}
        price={6.99}
      />

      <ProductForSale 
        title='Gibson Standad Medium Picks 26 Pack'
        description='A pack of 36 Gibson Standard Medium guitar picks'
        image={gibsonPicks}
        price={12.99}
      />

      <ProductForSale 
        title='Herdium 113 Heavy 1.1mm picks 12 Pack'
        description='A pack of 12 Herdium Heavy 1.1mm guitar picks'
        image={herdiumPicks}
        price={4.99}
      />

      <ProductForSale 
        title='Ernie Ball 2221 Strings .010-.046'
        description='A pack of 12 Fender 351 medium shaped guitar picks'
        image={ten46Strings}
        price={5}
      />

      <ProductForSale 
        title='Ernie Ball 2223 Strings .009-.042'
        description='A pack of 12 Fender 351 medium shaped guitar picks'
        image={nine42Strings}
        price={5}
      />

      <ProductForSale 
        title='Ernie Ball 2215 Strings, .010-.052'
        description='A pack of 12 Fender 351 medium shaped guitar picks'
        image={ten52Strings}
        price={9.99}
      />

      <ProductForSale 
        title='Fender FCT-2 Clip-on Tuner'
        description='A small reliable, lightweight guitar tuner'
        image={fenderTuner}
        price={16.99}
      />

      <ProductForSale 
        title='JOYO Clip-on Guitar Tuner'
        description='JOYO manufactured guitar tuner with enviornmentally friendly materials'
        image={joyoTuner}
        price={7.29}
      />

      <ProductForSale 
        title='Snarz SN5X Clip-on Tuner'
        description='A versatile tuner, suitable for guitar, bass, and violin.'
        image={snarxTuner}
        price={14.99}
      />
    </div>
  )
}
