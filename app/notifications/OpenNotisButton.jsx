'use client'

import React, { useState } from 'react'
import Notifications from './Notifications'
import { IoMdNotificationsOutline } from 'react-icons/io'

const OpenNotisButton = () => {

    const [open, setOpen] = useState(false)

    const openNotisMenu = ()=>{
      if(open === false){
        setOpen(true)
      }
      setTimeout(()=>{
        setOpen(false)
      },100)
    }
  

  return (
    <div>
      <button onClick={()=> openNotisMenu()} className='  rounded-md  relative text-[25px] font-medium p-2 sm:mt-0 hover:bg-gray-700 hover:bg-opacity-40 text-[#EC7C6A]'>
 
      <IoMdNotificationsOutline  />
      <span className='absolute top-0 right-0 bg-[#EC7C6A] rounded-full px-[6px] text-xs  text-gray-50'> 0 </span>
      </button>

      <Notifications state={open}/>
    </div>
  )
}

export default OpenNotisButton