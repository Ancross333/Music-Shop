import {Link} from 'react-router-dom';
import logoImage from '../../../Assets/Logo.png'
import shoppingCartIcon from '../../../Assets/shoppingCart.png'

export default function Navbar({loggedIn, setLoginOpen, setRegisterOpen, signOut, showCart}) {

  return (

    <div className='navContainer'>
      
      <div className='logo'>
        <Link 
        onClick={() => document.title = "Music Shop"}
        to = '/Music-Shop'>
          <img src={logoImage} alt='logo' />
        </Link>
      </div>

      <div className='navButtonContainer'>

        <Link 
        onClick={() => document.title = "Instruments"}
        className='navLink' 
        to='/Music-Shop/Products/Instruments'>
        Shop
        </Link>

        {

          //Render Sign Out and Cart buttons if the user is logged in, Sign Up/In butons otherwise

          loggedIn? 
            
          <div className='signedInButtonsContainer'>

            <button onClick={showCart} className='landButton noBackground'>
              <img src={shoppingCartIcon} alt='Shopping Cart' />
            </button>

            <button onClick={signOut} className='landButton'>
              Sign Out
            </button> 
          </div>
            
            
            : 

            <div>
              <button className='landButton' onClick={() => setLoginOpen(true)}>
                Sign In
              </button>

              <button className='landButton' onClick={() => setRegisterOpen(true)}>
                Sign Up
              </button>
            </div>
        }
        

      </div>
    </div>
  )
}
