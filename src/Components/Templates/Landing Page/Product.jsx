import React from 'react'

export default function Product( {image, description, alt} ) {
  return (
    <div className='productContainer'>
      <img src={image} alt={alt} />

      <p>{description}</p>
    </div>
  )
}
