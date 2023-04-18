'use client'
import React from 'react'

const TotalPrice = () => {


  const getCart = localStorage.getItem('cart')

  const cart = JSON.parse(getCart)

  let total = 0  

    cart.forEach(element => {
      total += (element.price * element.cantidad)
    });

  return (
    <span>
      $ {total}.00
    </span>
  )
}

export default TotalPrice