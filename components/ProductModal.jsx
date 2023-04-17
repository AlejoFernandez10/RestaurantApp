'use client'

import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import Image from 'next/image'

const  ProductModal = ({name, price, description, img, state, id})=> {

  console.log(state)

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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
              <Dialog.Panel className="relative transform sm:ml-5 overflow-hidden rounded-lg bg-[#262737] text-left shadow-xl transition-all sm:w-[90%]  sm:max-w-[900px] ">
                <div className="bg-[#262737] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex  flex-shrink-0 items-center justify-center rounded-[10px] bg-red-100 sm:mx-0 ">
                    <Image src={img} alt={description}  width={150} height={82.5} className='rounded-[15%] h-auto w-auto'  />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className=" font-semibold text-2xl leading-6 mb-4 sm:mb-14 sm:pt-5 text-gray-100">
                        {name}
                      </Dialog.Title>
                      <div className="mt-2 flex flex-col">
                        <span className='text-left text-xs pl-2 font-semibold'> Ingredients:</span>
                        <p className="text-sm sm:text-base text-gray-300 text-left p-2">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae velit molestias non qui ipsa repellendus aliquid, a deleniti, ex, perferendis doloribus.
                        </p>
                        <span className='text-left p-2 font-semibold'>${price}.00 </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#262737] px-4 py-3 flex flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Agregar
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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