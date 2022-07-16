
import React from 'react'

export default function CartItem( {itemName, itemPrice, itemQuantity, itemKey, currentUser, refresh} ) {
  
  function removeItem(){

    const newCart = currentUser.cart.filter(item => checkName(item))

    currentUser.cart = newCart
    refresh()
  }

  //Function to filter out item the user chose to remove

  function checkName(item){
    return item.itemKey !== itemKey
  }

  return (
    <div className='cartItemContainer'>
      <h3>{itemName}</h3>
      <p>
        Quantity: {itemQuantity}<br />
        Price: ${itemPrice}
      </p>
      <button onClick={() => removeItem(0)} className='modalButton'>
        Remove Item
      </button>
    </div>
  )
}
