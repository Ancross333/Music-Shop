import React from 'react'

export default function CartItem( {itemName, itemPrice, itemQuantity, currentUser} ) {
  return (
    <div className='cartItemContainer'>
      <h3>{itemName}</h3>
      <p>
        Quantity: {itemQuantity}<br />
        Price: ${itemPrice}
      </p>
    </div>
  )
}
