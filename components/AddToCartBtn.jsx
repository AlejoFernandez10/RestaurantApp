'use client'
import React, { useEffect } from 'react'

import { useContext, useState } from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import Context from '../app/context/Context'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AddToCartBtn = ({name, price , img , description, id, quantity }) => {

  const [cart, setCart] = useContext(Context) 
      
    
  const [count , setCount ] = useState(()=>{
    return quantity > 0 ? quantity : 1
  });

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
    toast.success('Producto Agregado!', {
      position: "top-center",
      autoClose: 1400,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  
  
  
  

  return (
    <>
    

      <AiOutlinePlusCircle onClick={()=> addToCart() & toast() } className='text-[27px]  text-[#EC7C6A] cursor-pointer  hover:opacity-80 ' />

    
      
    </>
  )
}

export default AddToCartBtn


