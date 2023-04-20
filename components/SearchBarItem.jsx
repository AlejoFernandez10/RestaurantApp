'use client'
import React, {useState} from 'react'

import Image from 'next/image'
import ProductModal from './ProductModal'

const SearchBarItem = ({name, description, id, img, price}) => {
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
    <>
    
    <button onClick={(e)=> e.preventDefault() & openModal() } className='text-gray-50 text-sm flex justify-between p-2'  key={name} >
            
    <div className='flex'>
    <Image src={img} alt={description} height={20} width={30} className='w-auto h-auto rounded' />

    <p className='text-sm pl-4'>

     {name.slice(0,15)}...
    </p>
    </div>
    

    <span>${price}.00 </span>
   </button>

   <ProductModal state={modalState} name={name} img={img} description={description} price={price} id={id} />    
    </>

  )
}

export default SearchBarItem