'use client';

import '../globals.css'
import { Fragment, useState, useEffect, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import Context from '../context/Context'

import { toast } from 'react-toastify';
import Image from 'next/image';
import {BsTrash3} from 'react-icons/bs'
import Link from 'next/link';

const Cart = ({state}) => {

  const [open, setOpen] = useState(false)

  const [cart, setCart] = useContext(Context)


  useEffect(()=>{
    const checkState = ()=>{
      if(state === true){
        setOpen(state)
      } 
    }
  
    checkState()

  },[state])


  let precioTotal = 0  

    cart.forEach(element => {
      precioTotal += (element.price * element.cantidad)
    });
    
    
    const emptyCart = ()=>{
      toast.success('Carrito Vacío!', {
        position: "bottom-center",
        autoClose: 1400,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

      localStorage.clear()
      setCart([])
    }

  
  
  if(cart.length === 0){
    
  }
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
          </Transition.Child>
  
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 "
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 "
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                    <div className="flex h-full flex-col overflow-y-scroll bg-[#1F1D2B] shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-100">Order</Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-100 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
  
                        <div className="mt-16">
                          <div className="flow-root">
                            <ul role="list" className="flex flex-col gap-y-5">

                              {cart.length === 0 ? <p className='text-center absolute left-[35%] top-[30%] text-2xl'>Cart empty...</p> : 
                                    
                              cart.map((product) => (
                                <li key={product.id} className=" py-6 min-h-[150px]  bg-[#262737] rounded">
                                  <div className="flex pl-3 w-[95%] overflow-hidden rounded-md ">
                                    <Image
                                      src={product.img}
                                      alt={product.description}
                                      width={80}
                                      height={50}
                                      className="h-[50px] w-auto rounded-[10%] object-cover object-center"
                                    />
                                  
                                  <div className="ml-3 flex w-full  flex-col">
                                    <div className='w-full'>
                                      <div className="flex justify-between w-full text-base font-medium text-gray-200">
                                        <h3 className='flex flex-col sm:flex-row justify-between w-[90%] sm:w-[70%]'>
                                          <span className='flex flex-col text-xs sm:text-sm '>{product.name.slice(0,10)}... <span className='text-xs text-gray-400'>${product.price}.00 </span> </span>
                                          <span className='text-xs sm:text-sm '>{product.cantidad}/u</span>
                                        </h3>
                                        <p className="ml-4 text-xs sm:text-sm ">${product.price * product.cantidad}.00</p>
                                      </div>
                                      
                                    </div>
                                  </div>
                                  </div>
                                    <div className="flex w-[95%] mt-6 pl-3 h-full items-end justify-between text-sm">

                                      <input type="text" placeholder='Order note...' className='rounded-[5px] text-sm bg-[#1F1D2B]  p-[5px] h-full  pl-2 w-[70%] sm:w-[80%]  sm: sm:m-0 sm:mr-5 py-[7px] text-gray-50' />
  
                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-[#EC7C6A]"
                                          onClick={()=>  emptyCart()}
                                        >
                                          <BsTrash3 className='text-[18px] mb-2 mr-2'/>
                                        </button>
                                      </div>
                                    </div>
                                  
                                </li>
                              ))
                              }

                            </ul>
                          </div>
                        </div>
                      </div>
  
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-200">
                          <p>Subtotal</p>
                          <p>{cart.length === 0 ? '$0': `$${precioTotal}.00`}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                          <Link
                            href={cart != [] ? '/' : '/checkout'}
                            onClick={() => cart != [] ? open : setOpen(false)}
                            className="flex items-center justify-center rounded-md border border-transparent bg-[#EC7C6A] px-6 py-3 text-base font-medium opacity-90 text-gray-200 shadow-sm hover:opacity-[100%]"
                          >
                            Checkout
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            o 
                            <button
                              type="button"
                              className="font-medium text-[#EC7C6A]"
                              onClick={() => setOpen(false)}
                            >
                               Seguir Comprando
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
  
  
}
export default Cart