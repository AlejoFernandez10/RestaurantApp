
import React from 'react'

import Image from 'next/image'




import AddToCartBtn from './AddToCartBtn'

const PizzasItem = ({ name, description, img , price, id }) => { 

  

  return (
  <div  className='bg-[#1F1D2B] m-1 rounded-[10px] flex flex-col w-full z-0 relative max-w-[280px] min-h-[200px]  md:max-w-[310px] lg:max-w-[350px] justify-center items-center'>
            
            
    <Image src={img} alt={description}  width={120} height={82.5} className='rounded-[15%] h-auto w-auto absolute top-[-40px]'  />
  
    <div className='mt-10 flex flex-col w-full px-5 max-w-[95%]'>

    
      <div className='pt-4  '>
        
          <h3 className='font-semibold text-sm pb-2 text-left pl-8'>{name} </h3>
          <p className='text-xs text-left pl-8 pb-2 mb-5 text-gray-400'>{description.slice(0,28)}... </p>
                         
      </div>
    
    
      <div className='flex w-full justify-between pt-4 px-8 pb-2'>
        <p className='  font-semibold pb-2  ' >${price}.00 </p>

        <AddToCartBtn name={name} img={img} description={description} price={price} id={id}/>
     
      </div>
    </div>


   
    
  
  </div>  
    )
  
}

export default PizzasItem