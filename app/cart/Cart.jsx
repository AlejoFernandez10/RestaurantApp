'use client';

import '../globals.css'
import { Fragment, useState, useEffect, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import Context from '../context/Context'





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
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
  
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-[#262737] shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-100">Carrito</Dialog.Title>
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
  
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">

                              {cart.length === 0 ? <p className='text-center absolute left-[30%] top-[30%] text-2xl'>Cart empty...</p> : 
                                    
                              cart.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.img}
                                      alt={product.description}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
  
                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-200">
                                        <h3>
                                          <span >{product.name}</span>
                                          
                                        </h3>
                                        <p className="ml-4">${product.price * product.cantidad}.00</p>
                                      </div>
                                      
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">

                                      <p>Unidades: {product.cantidad} </p>
  
                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-[#EC7C6A]"
                                          onClick={()=> localStorage.clear() & setCart([])}
                                        >
                                          Remove
                                        </button>
                                      </div>
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
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-[#EC7C6A] px-6 py-3 text-base font-medium opacity-90 text-gray-200 shadow-sm hover:opacity-[100%]"
                          >
                            Checkout
                          </a>
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