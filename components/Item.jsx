
import React, {useEffect, useState} from 'react'

import Image from 'next/image'

import ProductModal from './ProductModal'

import '../app/globals.css'
import AddToCartBtn from './AddToCartBtn'

const Item = ({ name, description, img , price, id }) => {  
  

  const [modalState, setModalState] = useState(false)

  const openModal = ()=>{
    if(modalState === false){
      setModalState(true)
    }
    setTimeout(()=>{
      setModalState(false)
    },100)
    
  }

  const [loader, setLoader] = useState(true) 

  setTimeout(()=>{
    setLoader(false)
  }, 1000)


  if(loader){
    return(
      
      <span className="loaderItems"></span>
      
    )
  }
    
  return (
    <div  className='bg-[#1F1D2B] m-1 rounded-[10px] flex flex-col w-full z-0 relative max-w-[280px] min-h-[220px]  md:max-w-[310px] lg:max-w-[350px] lg:max-h-250px justify-center items-center transition duration-300 hover:shadow-2xl'>
            
            <button onClick={()=> openModal()} className=' absolute top-[-40px]'>

              <Image src={img} alt={description}   width={120} height={82.5} className='rounded-[15%] h-auto w-auto max-h-[82.5px]'  />
            </button>
            
            <div className='mt-10 flex flex-col w-[95%] px-5 '>
  
              
                <div className='pt-4 cursor-pointer' onClick={()=> openModal()}>
                    <div className='flex flex-col mt-1 w-full  '>
                      <h3 className='font-semibold text-base  text-left  md:pl-6'>{name} </h3>

                      {/* ---- STARS SVG */}
                      <div className="-ml-0.5 flex  md:pl-6">
                             <svg
                               className="h-3 w-3 text-yellow-400"
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 20 20"
                               fill="currentColor"
                             >
                               <path
                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                               />
                             </svg>

                             <svg
                               className="h-3 w-3 text-yellow-400"
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 20 20"
                               fill="currentColor"
                             >
                               <path
                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                               />
                             </svg>

                             <svg
                               className="h-3 w-3 text-yellow-400"
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 20 20"
                               fill="currentColor"
                             >
                               <path
                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                               />
                             </svg>

                             <svg
                               className="h-3 w-3 text-yellow-400"
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 20 20"
                               fill="currentColor"
                             >
                               <path
                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                               />
                             </svg>

                             <svg
                               className="h-3 w-3 text-gray-200"
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 20 20"
                               fill="currentColor"
                             >
                               <path
                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                               />
                             </svg>
                        </div>

                    </div>
                    <p className='text-xs text-left pt-3 pr-8 pb-2  mb-5 text-gray-400 md:pl-6'>{description.slice(0,30)}... </p>
                                   
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

export default Item