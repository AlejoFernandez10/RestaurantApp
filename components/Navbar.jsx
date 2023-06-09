'use client'

import React, {useState, Fragment} from 'react'
import Link from 'next/link'
import OpenCartButton from '@/app/cart/OpenCartButton'

import {AiOutlineHome} from 'react-icons/ai'

import {GiHamburgerMenu} from 'react-icons/gi'
import {BsQuestionCircle} from 'react-icons/bs'
import {MdPeopleOutline} from 'react-icons/md'
import {FiMapPin} from 'react-icons/fi'

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import OpenNotisButton from '../app/notifications/OpenNotisButton'



const Navbar = () => {

  const[open, setOpen] = useState(false) 

  const openMenuonClick = ()=>{
    setOpen(true)
  }

  return (
    <header className='bg-[#1F1D2B] min-h-[60px] md:transition-all md:duration-200 md:hover:w-[7%] z-[40] fixed h-[5vh] bottom-0 w-full md:h-[100vh] md:max-w-[9%] lg:w-[5%] transform   md:flex md:items-start  md:justify-center '>
      <nav>

          

        <ul className='hidden  max-h-[800px] md:flex flex-col gap-10 items-center md:pt-20 '> 

          <h2 className='font-semibold text-lg'> <Link href={'/'}> LOGO </Link>  </h2>
          
          <li >

            <Link href={'/'} name="home" > <AiOutlineHome  className='text-[#EC7C6A] text-[25px] md:text-[40px] md:p-2 rounded hover:bg-gray-700 hover:bg-opacity-40'/> </Link>

          </li>

          

          <OpenNotisButton />

          

          
        
          <OpenCartButton />
          
          <li className=''>
            <Link href={'/'} name="About us" className='relative nav-link  ' >
              <MdPeopleOutline className='text-[#EC7C6A] text-[22px] md:text-[40px] md:p-2 rounded hover:bg-gray-700 hover:bg-opacity-40' />              

               <span className='absolute  top-10  right-[-50px]   shadow-2xl text-sm font-semibold transition-all duration-200 '>About us</span>
              
            </Link>
          </li>

          <li>
            <Link href={'/'} name="FAQs" className='relative nav-link'>
              <BsQuestionCircle className='text-[#EC7C6A] text-[22px] md:text-[40px] md:p-2 rounded hover:bg-gray-700 hover:bg-opacity-40' />
              <span className='absolute  top-10  right-[-30px]   shadow-2xl text-sm font-semibold transition-all duration-200 '>FAQs</span>
            </Link>
          </li>

          <li>
            <Link href={'/'} name="Find us" className='relative nav-link'>
              <FiMapPin className='text-[#EC7C6A] text-[22px] md:text-[40px] md:p-2 rounded hover:bg-gray-700 hover:bg-opacity-40' />
              <span className='absolute  top-10  right-[-30px]   shadow-2xl text-sm font-semibold transition-all duration-200 '>Find us</span>
            </Link>
          </li>

        </ul>

        
          {/* ----- MOBILE ASIDE MENU */}


        <Transition.Root show={open} as={Fragment}  > 
        <Dialog as="div" className="relative z-10  " onClose={setOpen}>
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
  
          <div className="fixed inset-0 overflow-hidden ">
            <div className="absolute inset-0 overflow-hidden ">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-[200px] pl-10  ">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-[500px] ">
                    <div className="flex h-full flex-col overflow-y-scroll bg-[#1F1D2B]  ">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between mb-10">
                          <Dialog.Title className="text-lg font-medium text-gray-300">Menu</Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      <ul className='pt-5 flex flex-col gap-4'>
                        <li>
                          <Link href={'/'} name="About us" className='text-sm'>About us </Link>
                        </li>
                        <li>
                          <Link href={'/'} name="Find us" className='text-sm'>Find us </Link>
                        </li>
                        <li>
                          <Link href={'/'} name="FAQs" className='text-sm'>FAQs </Link>
                        </li>
                      </ul>
                       
                   </div>
                   </div> 
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>


      {/* MOBILE BOTTOM MENU */}
            
      <ul className='flex pt-[10px] w-full justify-between m-auto max-w-[350px] px-12  items-center md:hidden'>
            
            <li >

            <Link href={'/'} name="home"> <AiOutlineHome  className='text-[#EC7C6A] text-[25px] '/> </Link>

            </li>

            <li >

            <OpenNotisButton />

            </li>
            
          <li>

          <OpenCartButton />
          </li>

          <li >

            <Link href={'/'} name="open menu" onClick={()=> openMenuonClick()}><GiHamburgerMenu  className='text-[#EC7C6A]  text-[25px]'/> </Link>

            </li>
        </ul>

      </nav>

    </header>
  )
}

export default Navbar