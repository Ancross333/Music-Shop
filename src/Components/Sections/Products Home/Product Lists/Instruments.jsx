import React from 'react'
import ProductForSale from '../../../Templates/Products/ProductForSale'

import gibsonSgSkyburst from '../../../../Assets/gibSgSkyburst.jpg'
import gibsonSgPurple from '../../../../Assets/gibSgPurple.jpg'
import fenderStrat from '../../../../Assets/fenderStrat.png'

export default function Instruments() {
  return (
    <div className='productsForSaleContainer'>

      <ProductForSale 
        title='Gibson SG Goddess Skyburst'
        description="This guitar is the skyburst variant of Gibson's 'goddess' branch of SGs"
        image={gibsonSgSkyburst}
        price={1850}
      />

      <ProductForSale 
        title='Gibson SG Goddess Violet Burst'
        description="Released in 2007, this guitar was the last of Gibson's 'goddess' branch of SGs"
        image={gibsonSgPurple}
        price={2350}
      />
      
      <ProductForSale 
        title='Fender Player Series Stratocastor'
        description='This guitar is the Player Series variant of a Fender Stratocastor'
        image={fenderStrat}
        price={1905}
      />
{/* 
      <ProductForSale 
        title='Gibson SG Goddess Skyburst'
        description='Cool guitar stuff going into detail about the guitar yessir'
        image={gibsonSgSkyburst}
      />

      <ProductForSale 
        title='Gibson SG Goddess Skyburst'
        description='Cool guitar stuff going into detail about the guitar yessir'
        image={gibsonSgSkyburst}
      />

      <ProductForSale 
        title='Gibson SG Goddess Skyburst'
        description='Cool guitar stuff going into detail about the guitar yessir'
        image={gibsonSgSkyburst}
      />

      <ProductForSale 
        title='Gibson SG Goddess Skyburst'
        description='Cool guitar stuff going into detail about the guitar yessir'
        image={gibsonSgSkyburst}
      />

      <ProductForSale 
        title='Gibson SG Goddess Skyburst'
        description='Cool guitar stuff going into detail about the guitar yessir'
        image={gibsonSgSkyburst}
      />

      <ProductForSale 
        title='Gibson SG Goddess Skyburst'
        description='Cool guitar stuff going into detail about the guitar yessir'
        image={gibsonSgSkyburst}
      /> */}

    </div>
  )
}
