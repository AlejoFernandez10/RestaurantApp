'use client'

import React, { useContext} from 'react'
import { useState } from 'react'
import CartContext from '../context/Context'

import Cart from './Cart'
import {AiOutlineShoppingCart} from 'react-icons/ai'



const OpenCartButton = () => {

  const [openCart, setOpenCart] = useState(false)

  const [cart,setCart] = useContext(CartContext)


  
  const totalQty = cart.reduce((acc, curr)=>{
    return acc + curr.cantidad
  }, 0)


  const open = ()=>{
    if(openCart === false){
      setOpenCart(true)
    }
    setTimeout(()=>{
      setOpenCart(false)
    },100)
  }


  return (
    <div className='relative'>
      <button onClick={()=> open()} className='  rounded-md   text-[25px] font-medium p-2 sm:mt-0 hover:bg-gray-700 hover:bg-opacity-40 text-[#EC7C6A]'><AiOutlineShoppingCart /> </button>
      <span className='absolute top-0 right-0 bg-[#EC7C6A] rounded-full px-[6px] text-xs '> {cart ? totalQty :  0} </span>
      <Cart state={openCart} />
    </div>
  )
}

export default OpenCartButton