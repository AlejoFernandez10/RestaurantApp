'use client'
import React, {useState, useContext, createContext} from 'react'

import FilterContext from '../app/context/FilterContext'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const FilterButtons = () => {

  const [buttonActive, setButtonActive] = useState(true)
  const [button1Active, setButton1Active] = useState(false)
  const [button2Active, setButton2Active] = useState(false)
  const [button3Active, setButton3Active] = useState(false)

  const [filter, setFilter] = useContext(FilterContext)
  const [filterValues] = useContext(FilterContext)
  
  

  return (
    <div className='flex justify-start items-start  w-full   border-b-[1px] border-gray-400 p-0   mx-2'>

      <div className='max-w-[320px] w-full grid grid-cols-4 justify-between sm:max-w-[400px] '>

          <button onClick={()=>setButtonActive(true) & setButton1Active(false) & setButton2Active(false) & setButton3Active(false) & setFilter('showAll')} className={classNames(
            buttonActive ? ' text-[#EC7C6A] border-[#EC7C6A] border-b-[1px]' : 'text-gray-200 ',
             '     pb-1  text-sm sm:text-base font-semibold' 
           )}>Show All </button>

          <button onClick={()=>setButtonActive(false) & setButton1Active(true) & setButton2Active(false) & setButton3Active(false) & setFilter('pizzas')} className={classNames(
            button1Active ? ' text-[#EC7C6A] border-[#EC7C6A] border-b-[1px]'  : 'text-gray-200 ',
             '     pb-1  text-sm  sm:text-base font-semibold'
           )}>Pizzas </button>

           <button onClick={()=>setButtonActive(false) & setButton1Active(false) & setButton2Active(true) & setButton3Active(false) & setFilter('desserts')} className={classNames(
            button2Active ? ' text-[#EC7C6A] border-[#EC7C6A]  border-b-[1px]' : 'text-gray-200 ',
             '     pb-1 text-sm  sm:text-base font-semibold'
           )}>Desserts </button>

           <button onClick={()=>setButtonActive(false) & setButton1Active(false) & setButton2Active(false) & setButton3Active(true)} className={classNames(
            button3Active ? ' text-[#EC7C6A] border-[#EC7C6A]   border-b-[1px]' : 'text-gray-200 ',
             '  p-0    pb-1  text-sm  sm:text-base font-semibold'
           )}>Popular </button>
          </div>
      </div>
    
  )
}

export default FilterButtons