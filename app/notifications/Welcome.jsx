import React from 'react'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const Welcome = () => {


  const fireNoti =() => {

    MySwal.fire({
      position: 'center',
      icon: 'info',
      title: 'Welcome!',
      html:`<p class="text-left text-sm font-semibold text-gray-300">Greetings! We are TuResto, this is a restaurant aplication template. Every title, text, picture and price can be modified. Hope you like it!</p>` ,
      showConfirmButton: false,
      background:"#000" ,
      color:"#fff",
      
    })
  }

  return(
    <button onClick={()=> fireNoti()}>noti</button>
  )
  
}

export default Welcome