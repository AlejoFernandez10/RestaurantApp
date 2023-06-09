'use client'

import React, {useEffect, useState} from 'react'
import '../app/globals.css'


const Loader = () => {

  const [loader, setLoader] = useState(true)

  useEffect(()=>{
    
    setTimeout(()=>{
      setLoader(false)
    }, 2000)
  })


    if(loader){
    
      return (  
        <div className='z-[300] w-full overflow-hidden  fixed h-full max-h-[100vh] max-w-[100vw]  flex flex-col items-center justify-center bg-[#1F1D2B]'>
          <h2 className='text-3xl  text-gray-50 font-semibold '>YourResto</h2>
          <span className='mb-20 text-[11px] text-gray-400 pr-1'> 09 November 2002</span>
          <span className="loader right-5 mt-5"></span>
        </div>


      )
    }
}

export default Loader