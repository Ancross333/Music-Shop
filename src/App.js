import React, { useState } from 'react'
import Navbar from './Components/Sections/App/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './CSS/App.css';
import './CSS/Global.css'
import RegisterModal from './Components/Sections/Modals/Navbar/User Authentication/RegisterModal';
import LoginModal from './Components/Sections/Modals/Navbar/User Authentication/LoginModal';
import Routing from './Components/Sections/App/Routing';
import BuyModal from './Components/Sections/Modals/Product Pages/BuyModal';
import { BuyModalOpenContext } from './Components/Contexts/Modals/BuyModalOpenContext';
import { SetModalContent } from './Components/Contexts/Modals/SetModalContentContext';
import { CurrentUser } from './Components/Contexts/User Data/CurrentUserContext';
import CartModal from './Components/Sections/Modals/Navbar/Cart/CartModal';


function App() {

  //useState hooks for modal conditions

  const [loginOpen, setLoginOpen] = useState(() => {return false;});
  const [registerOpen, setRegisterOpen] = useState(() => {return false;});
  const [buyModalOpen, setBuyModalOpen] = useState(() => {return false;})
  const [cartModalOpen, setCartModalOpen] = useState(() => {return false;})

  //useState hooks for objects
  
  const [buyModalContent, setBuyModalContent] = useState({})
  const [users, setUsers] = useState(() => {return []})
  const [currentUser, setCurrentUser] = useState(() => {return null})

  return (
    <div className="appContainer">
      <Router>
        <Navbar 
          setLoginOpen={setLoginOpen}
          setRegisterOpen={setRegisterOpen}
          showCart = {() => setCartModalOpen(true)}
          loggedIn={currentUser !== null}
          signOut={() => setCurrentUser(null)}
        />

        <SetModalContent.Provider value={setBuyModalContent}>
          <BuyModalOpenContext.Provider value={() => setBuyModalOpen(true)}>
            <CurrentUser.Provider value={currentUser}>
              <Routing />
            </CurrentUser.Provider>
          </BuyModalOpenContext.Provider>
        </SetModalContent.Provider>
        
        
      </Router>

      {registerOpen && <RegisterModal 
          closeModal={() => setRegisterOpen(false)}
          users={users}
          updateUsers={setUsers}
        />
      }

      {
        loginOpen && <LoginModal 
          closeModal={() => setLoginOpen(false)}
          setCurrentUser={setCurrentUser}
          users={users}
        />
      }

      {
        buyModalOpen && <BuyModal 
          closeModal={() => setBuyModalOpen(false)}
          modalContent = {buyModalContent}
          currentUser={currentUser}
        />
      }

      {
        cartModalOpen && <CartModal 
          closeModal={() => setCartModalOpen(false)}
          currentUser={currentUser}
        />
      }

      
    </div>
  );
}

export default App;
