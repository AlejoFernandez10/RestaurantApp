'use client'

import '../app/globals.css'

import React , {useState} from 'react'


import PizzasItem from './PizzasItem'
import DessertsItem from './DessertItem'
import Image from 'next/image'

const HomeProducts = ({products}) => {

  const[ prodsDisplayed, setProdsDisplayed] = useState(20)

  const [dessertsDisplayed, setDessertsDisplayes] = useState(3)

  
  
  if(products){

    return (
      <div className='w-full flex flex-col sm:pl-9 m-auto' >
        <h1 className='text-center pt-16 mb-5 text-3xl'  id='main-title'>Catálogo</h1>
  
        <div className='grid grid-cols-1 m-auto  place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-x-2  w-full px-10 gap-y-20 pt-20 md:max-w-[700px] lg:max-w-[1200px] '>  
        
        {products[0].slice(10, prodsDisplayed).map((prod)=>(


          <PizzasItem 
          key={prod.id}
          id={prod.id}
          name={prod.name}
          price={prod.price}
          description={prod.description}
          img={prod.img}/>
        ))
        }
  
        {products[1].slice(0, dessertsDisplayed).map((prod)=>(
          <DessertsItem 
          key={prod.id}
          id={prod.id}
          name={prod.name}
          price={prod.price}
          description={prod.description}
          img={prod.img}/>
        ))}
  
        </div>
  
  
        <button onClick={()=> setProdsDisplayed(30) & setDessertsDisplayes(6)} className='m-auto font-semibold text-gray-200 bg-[#EC7C6A] px-4 py-2 rounded cursor-pointer mt-5' style={{display:`${prodsDisplayed > 28 ? "none": "inline"}` }}> Ver todos </button>
        
      </div>
    )

  }
}

export default HomeProducts