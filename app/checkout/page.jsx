'use client'

import React, { useState } from 'react'

import CheckoutItems from './CheckoutItems'
import TotalPrice from './TotalPrice'
import PayNowBtn from './PayNowBtn'
import '../globals.css'

const Checkout = () => {
  
  const [loader, setLoader] = useState(true)

  setTimeout(()=>{

    setLoader(false)
  },1500) 


  if(loader){
    return(

    <div className='z-[100] w-full overflow-hidden  fixed h-full max-h-[100vh] max-w-[100vw]  flex flex-col items-center justify-center bg-[#1F1D2B]'>
          
          <span className="loader right-5 mt-5"></span>
    </div>
    )
  }else{

    return (
      <section className=' '>
        
              <h1 className="sr-only">Checkout</h1>
  
              <div className="mx-auto bg-[#262737] grid grid-cols-1 md:grid-cols-2 min-h-[100vh] md:pl-[10%] lg:pl-10 xl:pl-0">
                <div className=" py-12 md:py-24">
                  <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                    <div className="flex items-center gap-4">
                      <span className="h-10 w-10 rounded-full bg-[#EC7C6A]"></span>
  
                      <h2 className="font-medium ">YourResto</h2>
                    </div>
  
                    <div>
                      <p className="text-2xl font-medium tracking-tight ">
                        <TotalPrice />
                      </p>
  
                      <p className="mt-1 text-sm text-gray-300">For the purchase of</p>
                    </div>
  
                    <div>
                      <div className="flow-root">
  
                        <CheckoutItems />
  
  
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="bg-[#1F1D2B] h-full py-12 md:py-24">
                  <div className="mx-auto max-w-lg px-4 lg:px-8">
                    <form className="grid grid-cols-6 gap-4">
                      <div className="col-span-3">
                        <label
                          htmlFor="FirstName"
                          className="block text-xs font-medium "
                        >
                          First Name
                        </label>
  
                        <input
                          type="text"
                          id="FirstName"
                          className="mt-1 w-full rounded-sm p-[5px] py-[6px] border-gray-900 bg-[#262737] shadow-2xl sm:text-base"
                        />
                      </div>
  
                      <div className="col-span-3">
                        <label
                          htmlFor="LastName"
                          className="block text-xs font-medium "
                        >
                          Last Name
                        </label>
  
                        <input
                          type="text"
                          id="LastName"
                          className="mt-1 w-full rounded-sm p-[5px] py-[6px] border-gray-900 bg-[#262737] shadow-2xl sm:text-base"
                        />
                      </div>
  
                      <div className="col-span-6">
                        <label htmlFor="Email" className="block text-xs font-medium ">
                          Address
                        </label>
  
                        <input
                          type="text"
                          id="Email"
                          className="mt-1 w-full rounded-sm p-[5px] py-[6px] border-gray-900 bg-[#262737] shadow-2xl sm:text-base"
                        />
                      </div>
  
                      <div className="col-span-6">
                        <label htmlFor="Phone" className="block text-xs font-medium ">
                          Phone
                        </label>
  
                        <input
                          type="tel"
                          id="Phone"
                          className="mt-1 w-full rounded-sm p-[5px] py-[6px] border-gray-900 bg-[#262737] shadow-2zl sm:text-base"
                        />
                      </div>
  
                      <fieldset className="col-span-6">
                        <legend className="block text-sm font-medium ">
                          Card Details
                        </legend>
  
                        <div className="mt-1 -space-y-px rounded-md  shadow-sm">
                          <div>
                            <label htmlFor="CardNumber" className="sr-only"> Card Number </label>
  
                            <input
                              type="text"
                              id="CardNumber"
                              placeholder="Card Number"
                              className="relative mt-1 w-full rounded bg-[#262737] p-[6px] py-[7px] mb-2 border-gray-200 focus:z-10 sm:text-sm"
                            />
  
                          </div>
  
                          <div className="flex gap-2">
                            <div className="flex-1">
                              <label htmlFor="CardExpiry" className="sr-only"> Card Expiry </label>
  
                              <input
                                type="text"
                                id="CardExpiry"
                                placeholder="Expiry Date"
                                className="relative w-full rounded bg-[#262737] p-[6px] py-[7px]  focus:z-10 sm:text-sm"
                              />
                            </div>
  
                            <div className="-ms-px flex-1">
                              <label htmlFor="CardCVC" className="sr-only"> Card CVC </label>
  
                              <input
                                type="text"
                                id="CardCVC"
                                placeholder="CVC"
                                className="relative w-full rounded bg-[#262737] p-[6px] py-[7px] focus:z-10 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </fieldset>
  
                      <fieldset className="col-span-6">
                        <legend className="block text-sm font-medium ">
                          Billing Address
                        </legend>
  
                        <div className="mt-1  -space-y-px rounded-sm p-[5px] border-gray-900  shadow-2xl sm:text-base">
                          <div className='mb-2'>
                            <label htmlFor="Country" className="sr-only">Country</label>
  
                            <select
                              id="Country"
                              className="relative w-full rounded p-[5px] px-[6px] border-gray-900 bg-[#262737] shadow-2xl  sm:text-sm"
                            >
                              <option>Argentina</option>
                              <option>Brazil</option>
                              <option>Chile</option>
                              <option>Colombia</option>
                              <option>USA</option>
                              <option>Uruguay</option>
                            </select>
                          </div>
  
                          <div >
                            <label className="sr-only" htmlFor="PostalCode"> ZIP/Post Code </label>
  
                            <input
                              type="text"
                              id="PostalCode"
                              placeholder="ZIP/Post Code"
                              className="relative w-full rounded-sm p-[5px] px-[7px] border-gray-900 bg-[#262737] shadow-2xl "
                            />
                          </div>
                        </div>
                      </fieldset>
  
                      <div className="col-span-6 mb-10">
  
                       
                       <PayNowBtn />
                        
                       
  
                      </div>
                    </form>
                  </div>
                </div>
              </div>
          </section>
        )
  }



}

export default Checkout