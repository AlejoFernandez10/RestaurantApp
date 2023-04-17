'use client'
import React from 'react'

import { useContext, useState } from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import Context from '../app/context/Context'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddToCartBtn = ({name, price , img , description, id}) => {

  const [cart, setCart] = useContext(Context)

  const [count, setCount ] = useState(1);

  const addToCart = () => {
    setCart((currentItems) => {
      const isItem = currentItems.find((item) => item.id === id)
  
      if (isItem) {
        return currentItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              cantidad: item.cantidad + count,
            }
          } else {
            return item
          }
        })
      } else {
        return [
          { id, cantidad: count, price, img, name, description },
          ...currentItems,
        ]
      }
    })
  }

  

  return (
    <>
      <AiOutlinePlusCircle onClick={()=> addToCart() } className='text-[26px] text-[#EC7C6A] cursor-pointer'/>     
  
      
    </>
  )
}

export default AddToCartBtn