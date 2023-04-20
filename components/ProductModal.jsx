'use client'

import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import Image from 'next/image'

import AddToCartVariant from './AddToCartVariant'

const  ProductModal = ({name, price, description, img, state, id})=> {

 

  const [open, setOpen] = useState(false)  
  
  useEffect(()=>{
    const checkState = ()=>{
      if(state === true){
        setOpen(state)
      } 
    }
    
    checkState()
    
  },[state])

  const cancelButtonRef = useRef(null)


  const [quantity, setQuantity] = useState(1)

  const addQty = ()=>{
    if(quantity < 5){
      setQuantity(quantity + 1)
    }
  }
  const resQty = ()=>{
    if(quantity > 1){
      setQuantity(quantity - 1)
    }
  }


  return (
    <Transition.Root show={open} as={Fragment} key={id}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity pl-10" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center  sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform  overflow-hidden rounded-lg  bg-[#262737] text-left shadow-xl transition-all sm:w-[90%] md:ml-14   sm:max-w-[900px] ">
                <div className="bg-[#262737] px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                  <div className="sm:flex sm:items-start max-w-[500px] sm:max-w-max">
                    <div className="mx-auto flex  flex-shrink-0 rounded-[10%] items-center justify-center   sm:mx-0  mt-5 ">
                      <Image src={img} alt={description}  width={150} height={82.5} className='rounded-[5%] h-auto w-auto '  />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className=" font-semibold text-lg text-left pl-2 leading-6 mb-3  sm:pt-5 text-gray-50 flex justify-between">
                        
                        <div>

                          <span className=''>{name} </span>

                                {/* ---- STARS SVG --------- */}
                          <div className="-ml-0.5 flex mt-2">
                             <svg
                               className="h-5 w-5 text-yellow-400"
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 20 20"
                               fill="currentColor"
                             >
                               <path
                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                               />
                             </svg>

                             <svg
                               className="h-5 w-5 text-yellow-400"
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 20 20"
                               fill="currentColor"
                             >
                               <path
                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                               />
                             </svg>

                             <svg
                               className="h-5 w-5 text-yellow-400"
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 20 20"
                               fill="currentColor"
                             >
                               <path
                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                               />
                             </svg>

                             <svg
                               className="h-5 w-5 text-yellow-400"
                               xmlns="http://www.w3.org/2000/svg"
                               viewBox="0 0 20 20"
                               fill="currentColor"
                             >
                               <path
                                 d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                               />
                             </svg>

                             <svg
                               className="h-5 w-5 text-gray-200"
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
                        <span className='hidden text-sm sm:text-xl  pl-3 sm:inline sm:pr-7'> ${price}.00</span>
                      </Dialog.Title>
                      <div className="flex flex-col">
                        <span className='text-left text-xs pl-2 font-semibold'> Ingredients:</span>
                        <p className="text-sm sm:text-base text-gray-300 text-left p-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae velit molestias non qui ipsa repellendus aliquid, a deleniti, ex, perferendis doloribus.
                        </p>
                        
                      
                      {/*-----------------------------  QUANTITY INPUT -------------------*/}
                      <div className='w-full flex mb-4 sm:pt-4 justify-between pr-7'>

                      <span className='text-sm sm:text-xl mt-1  self-start p-2 sm:hidden'> ${price}.00 c/u</span>
                        <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                        <div
                          className="flex items-center border  border-gray-200 rounded dark:border-gray-800"
                        >
                          <button
                            type="button"
                            className="w-10 h-10 rounded-s leading-10 text-gray-50 text-lg dark:bg-gray-900 transition  hover:opacity-75 "
                            onClick={resQty}
                          >
                            -
                          </button>

                          <span className="h-10 w-10 border-transparent text-center py-2 dark:bg-gray-900 ">
                                {quantity}
                          </span>

                          <button
                            type="button"
                            className="w-10 h-10 leading-10 rounded-e text-gray-50 text-lg dark:bg-gray-900 transition  hover:opacity-75 "
                            onClick={addQty}
                          >
                            +
                          </button>
                        </div>
                      </div> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#262737] flex flex-row-reverse sm:px-6 mb-4 ">
                  
                  
                    <AddToCartVariant  name={name} img={img} description={description} price={price} id={id} quantity={quantity} />
                  
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md py-[10px] m-2 ml-5  px-4 text-sm font-semibold   text-gray-50 shadow-sm sm:mt-1 sm:w-auto transition duration-200 hover:bg-gray-200 hover:text-gray-900"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ProductModal