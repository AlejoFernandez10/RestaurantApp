'use client'

import Link from 'next/link'
import React, {useContext} from 'react'
import CartContext from '../context/Context'

const PayNowBtn = () => {
  const itemsPayed = JSON.parse(localStorage.getItem('cart') || '[]')

  const [cart, setCart] = useContext(CartContext)

  const forDeli = JSON.parse(localStorage.getItem('forDeli')) || []

  const onClickHandler = () => {

    itemsPayed.forEach(item=>{

      forDeli.push(item);
    })

    localStorage.setItem('forDeli', JSON.stringify(forDeli));
    setCart([]);
  }

  
 

  return (
    <Link href={'/'}>
    <button onClick={()=> onClickHandler() }
      className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
      
      Pay Now
    </button>
    </Link>
  )
}

export default PayNowBtn