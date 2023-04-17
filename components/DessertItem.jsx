'use client'


import Image from 'next/image'

import AddToCartBtn from './AddToCartBtn'

import ProductModal from './ProductModal'
import { useState } from 'react'


const DessertsItem = ({ name, description, img , price, id }) => { 

  const [modalState, setModalState] = useState(false)

  const openModal = ()=>{
    if(modalState === false){
      setModalState(true)
    }
    setTimeout(()=>{
      setModalState(false)
    },100)
    
  }
  return (
    <div  className='bg-[#1F1D2B] m-1 rounded-[10px] flex flex-col w-full z-0 relative max-w-[280px] min-h-[220px]  md:max-w-[310px] lg:max-w-[330px] justify-center items-center transition duration-300 hover:shadow-2xl'>
            
            <button onClick={()=> openModal()} className=' absolute top-[-40px]'>

              <Image src={img} alt={description}  width={120} height={82.5} className='rounded-[15%] h-auto w-auto max-h-[82.5px]'  />
            </button>
            
            <div className='mt-10 flex flex-col w-full px-5 max-w-[95%]'>
  
              
                <div className='pt-4 cursor-pointer' onClick={()=> openModal()}>
                  
                    <h3 className='font-semibold text-base pb-2 text-left pl-2 md:pl-6'>{name} </h3>
                    <p className='text-xs text-left px-8 pb-2 pl-2 mb-5 text-gray-400 md:pl-6'>{description.slice(0,30)}... </p>
                                   
                </div>
              
              
              <div className='flex w-full justify-between pt-4 px-8 pb-2 pl-2 md:pl-6'>
                <p className='  font-semibold pb-2  ' >${price}.00 </p>

                <AddToCartBtn name={name} img={img} description={description} price={price} id={id}/>
               
              </div>
            </div>
  

             
              <ProductModal state={modalState} name={name} img={img} description={description} price={price} id={id} />
            
    </div>
    )
  
}

export default DessertsItem