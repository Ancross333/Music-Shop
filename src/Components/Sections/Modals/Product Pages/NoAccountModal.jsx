import React from 'react'

export default function NoAccountModal({closeModal, setCurrentUser}) {


  //Set the current user to a demo account

  function loginAsGuest(){

    //Create and sign in as guest user

    const guestUser = {
      cart: [],
      key: 0,
    }

    setCurrentUser(guestUser);
    closeModal()
  }


  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        
        
        <div className='modalTitle'>
          <h2>You need to be signed in to add items to your cart</h2>
        </div>

        <div className='modalButtons footerButtons'>
          <button className='modalButton' onClick={closeModal} >
            Cancel
          </button>

          <button className='modalButton' onClick={() => loginAsGuest()} >
            Log in with demo account
          </button>
        </div>
      </div>
    </div>
  )
}
