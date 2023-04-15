'use client'

import '../app/globals.css'

import React , {useState} from 'react'
import Link from 'next/link'

import {AiOutlinePlusCircle} from 'react-icons/ai'

const HomeProducts = ({products}) => {

  const[ prodsDisplayed, setProdsDisplayed] = useState(20)
  
  console.log(products)

  return (
    <div className='w-full flex flex-col sm:pl-9 m-auto' >
      <h1 className='text-center pt-16 mb-5 text-3xl'>Pizzas</h1>

      <section className='grid grid-cols-1 m-auto   md:grid-cols-2 lg:grid-cols-3  w-full px-10 gap-y-20 pt-20 md:max-w-[700px] lg:max-w-[1000px] '>

      {products[0].slice(10, prodsDisplayed).map((prod)=>(
        <div key={prod.id} className='bg-[#242837] m-1 rounded-[5%] flex flex-col   relative min-h-[200px] min-w-[250px] max-w-[281px] justify-center '>
          
          <Link href={'/'} className=' absolute top-[-40px] self-center   shadow-2xl'>
            <img src={prod.img} alt={prod.description} width={120} className='rounded-[15%]' />
          </Link>

            <div className='mt-10 flex flex-col'>

            <Link href={"/"}>
              <h3 className='font-semibold text-sm pb-2 pl-8'>{prod.name} </h3>
              <p className='text-xs text-left px-8 pb-2 mb-5 text-gray-400'>{prod.description} </p>
            </Link>
            
            <div className='flex w-full justify-between  px-8 pb-2'>
              <p className='  font-semibold pb-2  ' >${prod.price}.00 </p>
              <AiOutlinePlusCircle  className='text-2xl text-[#EC7C6A] cursor-pointer'/>
            </div>
            </div>

          
        </div>
      ))}
      </section>
      <button onClick={()=> setProdsDisplayed(30)} className='m-auto font-semibold text-gray-200 bg-[#EC7C6A] px-4 py-2 rounded cursor-pointer mt-5'> Ver todos </button>
      
    </div>
  )
}

export default HomeProducts