import React from 'react'
import { useContext } from 'react'
import { BuyModalOpenContext } from '../../Contexts/Modals/BuyModalOpenContext'
import { NoAccountModalOpen } from '../../Contexts/Modals/NoAccountModalOpenContext'
import { SetModalContent } from '../../Contexts/Modals/SetModalContentContext'
import { CurrentUser } from '../../Contexts/User Data/CurrentUserContext'

export default function ProductForSale( {title, description, image, alt, price} ) {

  //Imported Contexts

  const openModal = useContext(BuyModalOpenContext)
  const setModalContent = useContext(SetModalContent)
  const currentUser = useContext(CurrentUser)
  const openNoAccountModal = useContext(NoAccountModalOpen)

  //Open the 'add to cart' modal and set content to match the item

  function addToCart(){

    //Prompt user to sign in

    if(currentUser === null){
      openNoAccountModal()
      return;
    }

    openModal()

    setModalContent({
      title: title,
      image: image,
      description: description,
      price: price,
      humanReadable: humanReadable,
    })
    
  }

  //Function to update the price label to a human readable format

  function humanReadable(iPrice){

    //Convert item price to a string

    let newPrice = String(iPrice)

    //Add a 0 if the item price is only showing the tens place
    
    if(newPrice.includes('.')){

      //Add a 0 if there's only one digit after the decimal, otherwise chop off extras

      if( newPrice.substring(newPrice.indexOf('.')).length < 3){
          newPrice += '0';
      }
      else{
        newPrice = newPrice.substring(0, (newPrice.indexOf('.') + 3))
      }


    }

    //Add '.00' if the users price is at a whole integer value

    else{
      newPrice += '.00'
    }
    
    return newPrice
  }

  return (
    <div className='productForSaleContainer'>
      <div className='productForSaleHeader'>
        <h2>{title}</h2>
      </div>

      <div className='productForSaleImageContainer'>
        <img src={image} alt={alt} />
      </div>

      <div className='productForSaleFooter'>
        <p className='productForSaleDescription'>
          {description}
        </p>

        <div className='purchaseContainer'>
          <label className='priceLabel' htmlFor={`${title} button`} >Price: ${humanReadable(price)}</label>
          <button 
            className='addToCartButton' 
            id={`${title} button`} 
            onClick={() => addToCart()}
          >Add to Cart</button>
        </div>

      </div>
    </div>
  )
}
