'use client'


import React, {useContext, useState} from 'react'
import CartContext from '../context/Context'

import { useRouter } from 'next/navigation';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Link from 'next/link'

const MySwal = withReactContent(Swal);

const PayNowBtn = () => {
  
  const [cart, setCart] = useContext(CartContext)
  
  const itemsPayed = typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('cart') || '[]') : [];

  const forDeli = typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('forDeli')) || [] : [];


  const onClickHandler = () => {

    itemsPayed.forEach(item=>{

      forDeli.push(item);
    })

    localStorage.setItem('forDeli', JSON.stringify(forDeli));
    setCart([]);
  }
  
  
  const fireNoti =() => {
    
    MySwal.fire({
      position: 'center',
      icon: 'success',
      title: 'Purchase completed!',
      text:'You will receive a notification when your meal is on its way',
      showConfirmButton: false,
      background:"#000" ,
      color:"#fff",
      timer:1400
      
    })
  }
  
  
  const [redirect, setRedirect] = useState(false)

  
  const router = useRouter()

  if(redirect){
    router.push('/')
  }


    

   
  



 

  return (
     <Link href={'/'}>
        <button name='pay now' onClick={(e)=> e.preventDefault() &  onClickHandler() & fireNoti() & setTimeout(()=>{setRedirect(true)},1500)}
          className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
          
          Pay Now
        </button>
     </Link> 
    
  )
}

export default PayNowBtn