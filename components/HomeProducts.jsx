'use client'

import '../app/globals.css'

import React , {useState, useContext} from 'react'

import FilterContext from '../app/context/FilterContext'

import Item from './Item'

import { ToastContainer } from 'react-toastify'

const HomeProducts = ({products}) => {

  const [prodsDisplayed, setProdsDisplayed] = useState(20)
  const [pizzasDisplay, setPizzasDisplayed] = useState(20)
  const [inicialProd, setInicialProd] = useState(10)
  

  const [filter, setFilter] = useContext(FilterContext)
  const [priceFilter, setPriceFilter] = useContext(FilterContext)
   
  
  
  if(products){
    return (
      <div className='w-full flex flex-col m-auto'>
        <div  className='grid grid-cols-1 m-auto place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-x-2 w-full px-10 gap-y-20 pt-20 md:max-w-[700px] lg:max-w-[1300px]'>
          
            
          {filter !== 'desserts' ? products[0].slice(10, pizzasDisplay).map((prod) => (
            
            <Item 
              key={prod.name}
              id={prod.id}
              name={prod.name}
              price={prod.price}
              description={prod.description}
              img={prod.img}
            />
          ))
            :
            products[0].slice(31, 36).map((prod) => (
            
              <Item 
                key={prod.name}
                id={prod.id}
                name={prod.name}
                price={prod.price}
                description={prod.description}
                img={prod.img}
              />
            ))
        }
        
        {filter === 'showAll' && products[0].slice(inicialProd, prodsDisplayed).map((prod) => (
            
            <Item 
              key={prod.name}
              id={prod.id}
              name={prod.name}
              price={prod.price}
              description={prod.description}
              img={prod.img}
            />
          ))}

          


        </div>


        <button onClick={() => setProdsDisplayed(36) & setPizzasDisplayed(30) } className='m-auto font-semibold text-gray-200 bg-[#EC7C6A] px-4 py-2 rounded cursor-pointer mt-5' style={{display:`${prodsDisplayed > 28 ? "none": "inline"}` }}> Ver todos </button>
        <ToastContainer
          position="top-center"
          autoClose={1400}
          limit={2}        
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    )
  }
}

export default HomeProducts