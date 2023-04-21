'use client'

import React from "react"
import { useState, useEffect } from "react"
import Context from './Context'
import FilterContext from "./FilterContext"
import NotisContext from "./NotificationsContext"


const ContextProvider = ({children})=>{
  
  
  
  const [cart, setCart] = useState(() => {
    const localCart = typeof window !== 'undefined' ? localStorage.getItem("cart") : null;
    return localCart ? JSON.parse(localCart) : [];
  });
  

  const [Nts, setNts] = useState([
    
  ])
  
  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem('Nts', JSON.stringify(Nts))

  }, [cart, Nts]);

  

  const [filter, setFilter] = useState('showAll')

  const [priceFilter, setPriceFilter] = useState('')


  
  return(
    <FilterContext.Provider value={[filter, setFilter, priceFilter, setPriceFilter] } >
      <Context.Provider value={[cart, setCart]}>
        <NotisContext.Provider value={[Nts, setNts]}>

        {children} 
        
        
        
        </NotisContext.Provider>
      </Context.Provider>
    </FilterContext.Provider>
    )



  
}

export default ContextProvider