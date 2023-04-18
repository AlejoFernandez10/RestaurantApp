'use client'

import React from 'react'
import Image from 'next/image'

const CheckoutItems = () => {

  if( localStorage.getItem('cart')){

    const checkOutItems = localStorage.getItem('cart')
    const itemsParsed = JSON.parse(checkOutItems)  

    return (
      <ul className="-my-4 divide-y divide-gray-100">
  
  
             {itemsParsed.map((item)=>(

                          <li key={item.id} className="flex items-center gap-4 py-4">
                            <Image
                              src={item.img}
                              alt={item.description}
                              width={80}
                              height={60}
                              className="h-auto w-auto rounded object-cover"
                            />
  
                            <div>
                              <h3 className="text-sm ">{item.name}</h3>
  
                              <dl className="mt-0.5 space-y-px text-[10px] ">
                                <div>
                                  <dt className="inline">Quantity: </dt>
                                  <dd className="inline"> {item.cantidad} </dd>
                                </div>
  
                                <div>
                                  <dt className="inline">Price: </dt>
                                  <dd className="inline">${item.price}.00 </dd>
                                </div>
                              </dl>
                            </div>
                          </li>
             ))}         
  
       </ul>
    )
  
    }            
}

export default CheckoutItems