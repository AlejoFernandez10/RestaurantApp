'use client'
import React from 'react'
import { useState } from 'react'

import Cart from './Cart'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const OpenCartButton = () => {

  const [openCart, setOpenCart] = useState(false)


  const open = ()=>{
    if(openCart === false){
      setOpenCart(true)
    }
    setTimeout(()=>{
      setOpenCart(false)
    },100)
  }


  return (
    <div>
      <button onClick={()=> open()} className='  rounded-md   text-[25px] font-medium p-2 sm:mt-0 hover:bg-gray-700 hover:bg-opacity-40 text-[#EC7C6A]'><AiOutlineShoppingCart /> </button>

      <Cart state={openCart} />
    </div>
  )
}

export default OpenCartButton