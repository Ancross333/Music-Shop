import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import CartItem from '../../../../Templates/Cart/CartItem'



export default function CartModal({closeModal, currentUser}) {

  const [orderSuccess, setOrderSuccess] = useState(false)

  const useForceUpdate = () => {
    const [val, setVal] = useState(0);
    return () => setVal(oldVal => oldVal + 1)
  }
  
  const forceUpdate = useForceUpdate();

 

  function checkout(){
    currentUser.cart = [];

    setOrderSuccess(true)
  }

  function getKey(){
    currentUser.key++;
    return currentUser.key;
  }

  function successClose(){
    setOrderSuccess(false)
    closeModal()
  }

  return (
    <div className='cartModalBackground'>
      <div className='cartModalContainer'>

        {
          currentUser.cart.length === 0?

            !orderSuccess?

            <div className='emptyCartContainer'>

              <h2>
                Add some items to your cart, then return here to checkout
              </h2>

              <div className='modalButtons'>
                <button className='modalButton' onClick={closeModal}>
                  Browse Store
                </button>
              </div>
            </div>

            :

            <div className='orderSuccessContainer'>

              <h2 className='orderSuccess'>
                Your order has been successfully placed!
              </h2>

              <div className='modalButtons'>
                <button className='modalButton' onClick={() => successClose()} >
                  Done
                </button>
              </div>
              
            </div>

          :

          <div className='hasCartContainer'>

            {currentUser.cart.map(item => (
              <CartItem 
                key={item.itemKey}
                currentUser={currentUser}
                itemName={item.itemName}
                itemPrice={item.price}
                itemQuantity={item.quantity}
                refresh={forceUpdate}
                itemKey={item.itemKey}
              />

              
            ))}

            <div className='checkoutButtons modalButtons modalFooter'>
              <button className='modalButton' onClick={closeModal}>
                Continue Shopping
              </button>

              <button className='modalButton' onClick={() => checkout()} >
                Checkout
              </button>
            </div>
            
          </div>
        }
        
      </div>
    </div>
  )
}
