'use client'
import React, {useState} from 'react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const FilterButtons = () => {

  const [buttonActive, setButtonActive] = useState(false)
  const [button1Active, setButton1Active] = useState(false)
  const [button2Active, setButton2Active] = useState(false)


  

  return (
    <div className='grid grid-cols-3 w-full justify-between items-center px-4 '>
    
    <button onClick={()=>setButtonActive(true) & setButton1Active(false) & setButton2Active(false)} className={classNames(
      buttonActive ? ' text-[#EC7C6A] border-[#EC7C6A]' : 'text-gray-100',
       ' border-b-2 pb-1 w-full'
     )}>Pizzas </button>

     <button onClick={()=>setButtonActive(false) & setButton1Active(true) & setButton2Active(false)} className={classNames(
      button1Active ? ' text-[#EC7C6A] border-[#EC7C6A]' : 'text-gray-100',
       ' border-b-2 pb-1 w-full'
     )}>Desserts </button>

     <button onClick={()=>setButtonActive(false) & setButton1Active(false) & setButton2Active(true)} className={classNames(
      button2Active ? ' text-[#EC7C6A] border-[#EC7C6A]' : 'text-gray-100',
       ' border-b-2 pb-1 w-full'
     )}>Cold Dishes </button>
    </div>
  )
}

export default FilterButtons