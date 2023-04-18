import Navbar from '@/components/Navbar'
import './globals.css'
import CartContextProvider from './context/CartContextProvider'
import Notifications from './notifications/Notifications'
import Loader from '@/components/Loader'

export const metadata = {
  title: 'TuResto',
  description: 'Template for Restaurants ',
}



export default function RootLayout({ children }) {

  
  return (
    <html lang="en">     
      <body className='relative'>
        <Loader />
        <CartContextProvider>
          <Navbar />
          <Notifications />
          {children}        
        </CartContextProvider>          
      </body>
    </html>
  )
}
