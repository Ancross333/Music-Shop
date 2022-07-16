import React from 'react'
import CartItem from '../../../../Templates/Cart/CartItem'

export default function CartModal({closeModal, currentUser}) {
  return (
    <div className='cartModalBackground'>
      <div className='cartModalContainer'>

        {
          currentUser.cart.length === 0?

          <div className='emptyCartContainer'>

            <h2>
              Your cart is empty. Would you like to fix that?
            </h2>

            <button className='modalButton' onClick={closeModal}>
              Cancel
            </button>
            
          </div>

          :

          <div className='hasCartContainer'>

            {currentUser.cart.map(item => (
              <CartItem 
                currentUser={currentUser}
                itemName={item.itemName}
                itemPrice={item.price}
                itemQuantity={item.quantity}
              />
            ))}

            <button className='modalButton' onClick={closeModal}>
              Continue Shopping
            </button>
          </div>
        }
        
      </div>
    </div>
  )
}
