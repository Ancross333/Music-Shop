import React, { useRef } from 'react'

export default function RegisterModal( {closeModal, users, updateUsers} ) {

  //Refs for email and password inputs
  
  const emailRef = useRef();
  const passwordRef = useRef();

  function register(e){
    e.preventDefault();
    
    //Prompt user email has been taken

    if(emailTaken()){
      alert('There is already an account associated with this email address');
      return;
    }

    //Prompt user password is too short

    if(passwordTooShort()){
      alert('Make sure your password is 8 or more characters')
      return;
    }

    //Create User Object

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      cart: [],
      key: 0
    }

    updateUsers(oldUsers => [...oldUsers, user])
    closeModal()
  }

  //Email Validation Function

  function emailTaken(){

    for(let i = 0; i < users.length; i++){
      
      //Check every user's email to confirm its available

      if(users[i].email === emailRef.current.value){
        return true;
      }

    }

    return false;
  }

  //Make sure the user's password is long enough

  function passwordTooShort(){
    return (passwordRef.current.value.length < 8)
  }

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <form onSubmit={e => register(e)}>
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

              <input 
                className='modalButton' 
                value='Register' 
                type='submit' 
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
