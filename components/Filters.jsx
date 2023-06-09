'use client'
import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import FilterButtons from './FilterButtons'


import SearchBar from './SearchBar'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Filters = ({dataProducts} ) => {

  

  return (
    <section className='w-full flex flex-col justify-center items-center'>
      
      <div className=' max-w-[1220px] flex flex-col items-start justify-between  w-full pt-10 sm:flex-row  sm:items-center'>

        <div className='p-2 mx-4'>
          <h1 className='text-2xl'>YourResto</h1>
          <span className='text-gray-400 text-xs ml-[2px]'>09 November 2002</span>
        </div>
       <SearchBar data={dataProducts} />
      </div>

        <div className=' max-w-[1200px] flex items-center justify-center sm:justify-start w-full pt-6 pb-5 mx-2'>

          <FilterButtons />
        </div>
      

      

      <div className='w-full max-w-[1200px] flex justify-between items-center px-2 pt-4'>
        <h2 className='font-semibold text-base'>Choose Dishes</h2>
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#1F1D2B] px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm   ">
          Options
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-100" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#1F1D2B] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? ' bg-gray-800 text-gray-200' : 'text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Higher price
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-800  text-gray-200' : 'text-gray-100',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Lower price
                </a>
              )}
            </Menu.Item>
            
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
      </div>
    </section>
  )
}

export default Filters