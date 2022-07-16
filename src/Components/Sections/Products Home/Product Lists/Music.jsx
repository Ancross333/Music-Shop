import React from 'react'

import masterOfPuppetsImage from '../../../../Assets/masterOfPuppetsCover.png'
import rideTheLightningImage from '../../../../Assets/rideTheLightningCover.png'
import andJusticeForAllImage from '../../../../Assets/andJusticeForAllCover.png'
import killEmAllImage from '../../../../Assets/killEmAllCover.png'
import blackAlbumImage from '../../../../Assets/blackAlbumCover.png'
import deathMagneticImage from '../../../../Assets/deathMagneticCover.png'
import ProductForSale from '../../../Templates/Products/ProductForSale'

export default function Music() {
  return (
    <div className='productsForSaleContainer'>
      
      <ProductForSale 
        title='Master of Puppets Full Album'
        image={masterOfPuppetsImage}
        alt='Master of Puppets Album Cover'
        price={7.99}
        description="Metallica's Master of Puppets album blah blah blah"
      />
        
      <ProductForSale 
        title='Ride the Lightning Full Album'
        image={rideTheLightningImage}
        price={7.99}
        description="Metallica's Master of Puppets album"
      />
        
      <ProductForSale 
        title='...And Justice for All Full Album'
        image={andJusticeForAllImage}
        price={7.99}
        description="Metallica's ...And Justice for All album"
      />
        
      <ProductForSale 
        title='Metallica "Black Album" Full Album'
        image={blackAlbumImage}
        price={7.99}
        description="Metallica's self-titled 'black' album"
      />
        
      <ProductForSale 
        title="Kill 'em All filler Full Album"
        image={killEmAllImage}
        price={7.99}
        description="Metallica's Kill 'em All album"
      />
        
      <ProductForSale 
        title='Death Magnetic Full Album'
        image={deathMagneticImage}
        price={7.99}
        description="Metallica's Death Magnetic album"
      />
        
      <ProductForSale 
        title='Master of Puppets Full Album'
        image={masterOfPuppetsImage}
        price={7.99}
        description="Metallica's Master of Puppets album"
      />
        
      <ProductForSale 
        title='Master of Puppets Full Album'
        image={masterOfPuppetsImage}
        price={7.99}
        description="Metallica's Master of Puppets album"
      />
        
      <ProductForSale 
        title='Master of Puppets Full Album'
        image={masterOfPuppetsImage}
        price={7.99}
        description="Metallica's Master of Puppets album"
      />

    </div>
  )
}
