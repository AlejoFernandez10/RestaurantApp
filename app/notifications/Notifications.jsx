'use client'

import { Fragment, useState, useEffect, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'



import { toast } from 'react-toastify';
import { IoMdNotificationsOutline } from 'react-icons/io'


const Notifications = ({state}) => {

  const [open, setOpen] = useState(false)

  const NotisContainer = []

  useEffect(()=>{
    const checkState = ()=>{
      if(state === true){
        setOpen(state)
      } 
    }
  
    checkState()

  },[state])
  
  
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 " onClose={setOpen}>
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
  
          <div className="fixed left-0 inset-0 overflow-hidden ">
            <div className="absolute left-0 inset-0 overflow-hidden ">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full  ">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 "
                  enterFrom="translate-x-[-500px]"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 "
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-[-500px]"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                    <div className="flex h-full flex-col overflow-hidden bg-[#1F1D2B] shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-100"> <IoMdNotificationsOutline className='text-white text-[25px]' /> </Dialog.Title>
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

                              {NotisContainer.length === 0 ? <p className='text-center pt-10 text-xl'>No notifications yet ...</p> : 
                                    
                              NotisContainer.map((notis) => (
                                <li key={notis.id} className=" py-6 min-h-[150px]  bg-[#262737] rounded">
                                  <div className="flex pl-3 w-[95%] overflow-hidden rounded-md ">
                                    
                                  
                                  <div className="ml-3 flex w-full  flex-col">
                                    <div className='w-full'>
                                      <div className="flex justify-between w-full text-base font-medium text-gray-200">
                                        <h3 className='flex flex-col sm:flex-row justify-between w-[90%] sm:w-[70%]'>
                                          Notis Title
                                        </h3>
                                        <p className="ml-4 text-xs sm:text-sm ">Notis description </p>
                                      </div>
                                      
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
                      
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
)} 

export default Notifications