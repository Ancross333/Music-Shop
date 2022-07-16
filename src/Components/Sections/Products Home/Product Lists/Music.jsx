import React from 'react'

import masterOfPuppetsImage from '../../../../Assets/masterOfPuppetsCover.png'
import rideTheLightningImage from '../../../../Assets/rideTheLightningCover.png'
import andJusticeForAllImage from '../../../../Assets/andJusticeForAllCover.png'
import killEmAllImage from '../../../../Assets/killEmAllCover.png'
import blackAlbumImage from '../../../../Assets/blackAlbumCover.png'
import deathMagneticImage from '../../../../Assets/deathMagneticCover.png'
import countdownToExtinction from '../../../../Assets/countdownToExtinction.png'
import rustInPeace from '../../../../Assets/rustInPeace.png'
import peaceSells from '../../../../Assets/peaceSells.png'
import ProductForSale from '../../../Templates/Products/ProductForSale'

export default function Music() {
  return (
    <div className='productsForSaleContainer'>
      
      <ProductForSale 
        title='Master of Puppets Full Album (Metallica)'
        image={masterOfPuppetsImage}
        alt='Master of Puppets Album Cover'
        price={7.99}
        description="Metallica's Master of Puppets album"
      />
        
      <ProductForSale 
        title='Ride the Lightning Full Album (Metallica)'
        image={rideTheLightningImage}
        price={7.99}
        description="Metallica's Master of Puppets album"
      />
        
      <ProductForSale 
        title='...And Justice for All Full Album (Metallica)'
        image={andJusticeForAllImage}
        price={7.99}
        description="Metallica's ...And Justice for All album"
      />
        
      <ProductForSale 
        title='"Black Album" Full Album (Metallica)'
        image={blackAlbumImage}
        price={7.99}
        description="Metallica's self-titled 'black' album"
      />
        
      <ProductForSale 
        title="Kill 'em All Full Album (Metallica)"
        image={killEmAllImage}
        price={7.99}
        description="Metallica's Kill 'em All album"
      />
        
      <ProductForSale 
        title='Death Magnetic Full Album (Metallica)'
        image={deathMagneticImage}
        price={7.99}
        description="Metallica's Death Magnetic album"
      />
        
      <ProductForSale 
        title='Countdown to Extinction Full Album (Megadeth)'
        image={countdownToExtinction}
        price={7.99}
        description="Megadeth's Countdown to Extinction album"
      />
        
      <ProductForSale 
        title='Rust in Peace (Remastered) Full Album (Megadeth)'
        image={rustInPeace}
        price={7.99}
        description="Megadeth's Rust in Peace (Remastered) album"
      />
        
      <ProductForSale 
        title="Peace Sells... but who's Buying Full Album (Megadeth)"
        image={peaceSells}
        price={7.99}
        description="Megadeth's Peace Sells... but who's Buying album"
      />

    </div>
  )
}
