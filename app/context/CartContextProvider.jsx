'use client'

import React from "react"
import { useState, useEffect } from "react"
import Context from './Context'




const CartContextProvider = ({children})=>{



    const [cart, setCart ] = useState(()=> {
      
        const localCart = localStorage.getItem('cart')
        return localCart ? JSON.parse(localCart) : []
      
    })
  

    useEffect(()=>{

      localStorage.setItem('cart', JSON.stringify(cart))

    }, [cart])

    return(
      <Context.Provider value={[cart, setCart]}>

        {children}

      </Context.Provider>
    )


}

export default CartContextProvider