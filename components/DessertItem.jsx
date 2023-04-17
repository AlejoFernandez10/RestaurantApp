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
    <div  className='bg-[#1F1D2B] m-1 rounded-[10px] flex flex-col w-full z-0 relative max-w-[280px] min-h-[200px]  md:max-w-[310px] lg:max-w-[350px] justify-center items-center'>
            
            <button onClick={()=> openModal()} className=' absolute top-[-40px]'>

              <Image src={img} alt={description}  width={120} height={82.5} className='rounded-[15%] h-auto w-auto'  />
            </button>
            
            <div className='mt-10 flex flex-col w-full px-5 max-w-[90%]'>
  
              
                <div className='pt-4  '>
                  
                    <h3 className='font-semibold text-sm pb-2 text-left pl-8'>{name} </h3>
                    <p className='text-xs text-left px-8 pb-2 mb-5 text-gray-400'>{description.slice(0,28)}... </p>
                                   
                </div>
              
              
              <div className='flex w-full justify-between pt-4 px-8 pb-2'>
                <p className='  font-semibold pb-2  ' >${price}.00 </p>

                <AddToCartBtn name={name} img={img} description={description} price={price} id={id}/>
               
              </div>
            </div>
  

             
              <ProductModal state={modalState} name={name} img={img} description={description} price={price} id={id} />
            
    </div>
    )
  
}

export default DessertsItem