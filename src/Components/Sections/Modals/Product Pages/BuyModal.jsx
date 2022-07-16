import React from 'react'
import { useState } from 'react'

export default function BuyModal({closeModal, modalContent, currentUser}) {

  //useState hooks for label and total price

  const [numOfItems, setNumOfItems] = useState(1);
  const [totalPrice, setTotalPrice] = useState(modalContent.price)

  //Functions to modify number of items

  //Add

  function addItem(){

    if(canAddItem()){
      setNumOfItems(oldNum => oldNum + 1)
      setTotalPrice(oldPrice => oldPrice + Number(modalContent.price));
    }
    
  }

  //Remove

  function removeItem(){
    if(canRemoveItem()){
      setNumOfItems(oldNum => oldNum - 1)
      setTotalPrice(oldPrice => oldPrice - Number(modalContent.price));
    }
  }

  //Create 'item' object and add it to the user's cart

  function addToCart(){

    console.log(currentUser.cart)
    const newCartItem = {
      itemName: modalContent.title,
      quantity: numOfItems,
      price: totalPrice,

    }

    currentUser.cart.push(newCartItem)
    closeModal();
  }

  //Condition to make sure the user's items are at least 1

  function canRemoveItem(){
    return (numOfItems > 1)
  }

  //Condition to make sure the user's items are at most 10

  function canAddItem(){
    return (numOfItems < 10)
  }
  

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>

        <div className='modalTitle'>
          <h1>{modalContent.title}</h1>
        </div>

        <div className='modalImageContainer'>
          <img src={modalContent.image} alt={modalContent.alt} />
        </div>

        <div className='modalButtons'>


          <div className='itemModifiers'>
            <button onClick={() => removeItem()} className='modalButton circle'>
              -
            </button>

            <label>
              {numOfItems}
            </label>

            <button onClick = {() => addItem()} className='modalButton circle'>
              +
            </button>
          </div>

          <div className='modalPrice'>
            <p>Total Price: ${modalContent.humanReadable(totalPrice)}</p>
          </div>

          <div className='footerButtons'>

            <button className='modalButton' onClick = {closeModal}>
              Cancel
            </button>

            <button onClick={() => addToCart()} className='modalButton'>
              Add to Cart
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
