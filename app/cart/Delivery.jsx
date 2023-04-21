'use client'
import React from 'react'
import Image from 'next/image'

const Delivery = () => {

  const deli = JSON.parse(localStorage.getItem('forDeli') || '[]')

  
  

if(deli){
  return (
    
    <ul className='mt-10'>

      {deli.map(item =>(
        
          <li key={item.id} className="flex items-center gap-4 py-4">
                            <Image
                              src={item.img}
                              alt={item.description}
                              width={80}
                              height={60}
                              className="h-auto w-auto rounded"
                            />
  
                            <div>
                              <h3 className="text-sm ">{item.name}</h3>
  
                              <dl className=" space-y-px text-[10px] ">
                                <div>
                                  <dt className="inline">Quantity: </dt>
                                  <dd className="inline"> {item.cantidad} </dd>
                                </div>
  
                                <div>
                                  <dt className="inline">Price: </dt>
                                  <dd className="inline">${item.price}.00 </dd>
                                </div>
                                <div>
                                  <dt className="inline">Status:</dt>
                                  <dd className="inline text-green-500"> On its way </dd>
                                </div>
                              </dl>
                            </div>
                          </li>
      
      ))}

    </ul>
  )
  
}else{
  return(
    <div className='h-[80%] w-full flex items-center justify-center'>

      <h3 className='text-gray-300 text-lg'> No items being delivered... </h3>

    </div>
  )
  
}
  
}

export default Delivery