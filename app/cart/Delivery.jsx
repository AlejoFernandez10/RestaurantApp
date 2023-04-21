'use client'
import React from 'react'
import Image from 'next/image'

const Delivery = () => {

  const deli = typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('forDeli')) || [] : [];

  
  


  return (
    
    <ul className='mt-10 w-full  flex flex-col justify-center '>

      <li className={`${deli ? 'hidden' : 'inline'} text-center text-lg mt-[85px] sm:text-xl`}> Nothing to deliver yet ... </li>

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
                                  <dd className="inline text-green-500"> On preparation </dd>
                                </div>
                              </dl>
                            </div>
                          </li>
      
      ))
        
    }

    </ul>
  )
  

  
    
  
  

  
}

export default Delivery