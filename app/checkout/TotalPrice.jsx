'use client'
import React from 'react'

const TotalPrice = () => {

  if (typeof window !== 'undefined') {
    
    const getCart = localStorage.getItem('cart')
  
    const cart = JSON.parse(getCart)
  
    let total = 0  
  
      cart.forEach(element => {
        total += (element.price * element.cantidad)
      });
  
    return (
      <p>
        $ {total}.00
      </p>
    )
  }


}

export default TotalPrice