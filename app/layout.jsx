import Navbar from '@/components/Navbar'
import './globals.css'
import ContextProvider from './context/ContextProvider'
import NotificationsContainer from './notifications/NotificationsContainer'
import Loader from '@/components/Loader'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'TuResto',
  description: 'Template for Restaurants ',
}



export default function RootLayout({ children }) {
  
  
  return (
    <html lang="es">     
      <body className='relative'>
        <Loader />
        <ContextProvider>
          <Navbar />
          <NotificationsContainer />
          {children}
          <Footer />        
        </ContextProvider>          
      </body>
    </html>
  )
}
