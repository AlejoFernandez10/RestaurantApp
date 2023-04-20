'use client'

import React from "react"
import { useState, useEffect } from "react"
import Context from './Context'
import FilterContext from "./FilterContext"



const ContextProvider = ({children})=>{
  
  
  
  const [cart, setCart] = useState(() => {
    const localCart = typeof window !== 'undefined' ? localStorage.getItem("cart") : null;
    return localCart ? JSON.parse(localCart) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  

  const [filter, setFilter] = useState('showAll')

  const [priceFilter, setPriceFilter] = useState('')


  
  return(
    <FilterContext.Provider value={[filter, setFilter, priceFilter, setPriceFilter] } >
      <Context.Provider value={[cart, setCart]}>


        {children}



      </Context.Provider>
    </FilterContext.Provider>
    )



  
}

export default ContextProvider