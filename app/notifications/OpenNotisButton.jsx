'use client'

import React, { useState } from 'react'
import Notifications from './Notifications'
import { IoMdNotificationsOutline } from 'react-icons/io'

const OpenNotisButton = () => {

    const [open, setOpen] = useState(true)

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
      <button onClick={()=> openNotisMenu()} className='text-[#EC7C6A] text-[25px] md:text-[40px] md:p-2 rounded  hover:bg-gray-700 hover:bg-opacity-40 '>

      <IoMdNotificationsOutline  />
      </button>

      <Notifications state={open}/>
    </div>
  )
}

export default OpenNotisButton