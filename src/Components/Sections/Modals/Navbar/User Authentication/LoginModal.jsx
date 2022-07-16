import React, { useRef } from 'react'

export default function RegisterModal( {closeModal, users, setCurrentUser} ) {

  //Variable for user with matching email

  let potentialUser = {};

  //Refs for login inputs

  const emailRef = useRef();
  const passwordRef = useRef();

  function logIn(e){
    e.preventDefault();

    if(!userExists()){
      alert('We do not have an account with that email')
      return;
    }

    if(correctPassword()){
      setCurrentUser(potentialUser);
      closeModal();
      return;
    }

    alert('Incorrect Password')
  }

  //Function to see if the entered email exists

  function userExists(){

    //Check every user for a matching email

    for(let i = 0; i < users.length; i++){
      if(users[i].email === emailRef.current.value){
        potentialUser = users[i];
        return true;
      }
    }

    return false;
  }

  //Function to see if password matches

  function correctPassword(){
    return (potentialUser.password === passwordRef.current.value)
  }

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <form onSubmit={e => logIn(e)}>

          <div className='modalInputs'>
            
              <input 
                id='email' 
                type='email' 
                placeholder='Email' 
                ref={emailRef}
                required
              />

              <input 
                id='password' 
                type='password' 
                placeholder='Password'
                ref={passwordRef}
                required
              />
            
          </div>

          
          <div className='modalButtons'>
            <div className='footerButtons'>
              <button className='modalButton' onClick = {closeModal}>
                Cancel
              </button>

              <button className='modalButton' type='submit' >
                Log in
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}
