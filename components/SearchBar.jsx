'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import ProductModal from './ProductModal'
import SearchBarItem from './SearchBarItem'


const SearchBar = ( {data} ) => {

  
  const [closeResults, setCloseResults] = useState(true)
  const [searchResults, setSearchResults] = useState([])

  const getData = ( value )=>{

    const results = data[0].filter((prod)=>{
      return value && prod && prod.name.toLowerCase().includes(value)
    })
    setSearchResults(results)
  }

  const handleChange = (value)=>{    
    getData(value)
  }

  



  
  
  return (
    <form className='relative flex flex-col justify-center items-center w-full sm:w-auto'>
      <FiSearch  className='absolute text-[18px] left-6 sm:left-3'/>
      <input   onChange={((e)=> handleChange(e.target.value))}   placeholder='Search' className='rounded-[5px] text-sm bg-[#1F1D2B] max-w-[450px] w-[95%] ml-3  m-auto p-[5px] pl-10 px-4  sm:max-w-[250px] sm:m-0 sm:mr-5 py-[7px] text-gray-50 md:w-[400px]  ' />
      
      
      

      {searchResults.length > 0 && (
      <section onClick={()=> setCloseResults(false)} className={`max-h-[300px] overflow-auto  w-[95%] max-w-[350px] left-3 flex flex-col sm:left-0  rounded absolute top-10 z-[500] bg-[#1F1D2B] shadow-2xl ${closeResults ? 'inline' : 'hidden'}`}>

        {searchResults.map((prodSearched)=>(          
           <SearchBarItem key={prodSearched.name} name={prodSearched.name} description={prodSearched.description} img={prodSearched.img} price={prodSearched.price}  />          
        ))}

      </section>
     )}

        

   </form>
  )
}

export default SearchBar