import Navbar from '@/components/Navbar'
import './globals.css'
import CartContextProvider from './context/CartContextProvider'

export const metadata = {
  title: 'Tu Restaurante',
  description: 'Templates para Restaurantes ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">     
      <body>
        <CartContextProvider>
          <Navbar />
          {children}        
        </CartContextProvider>          
      </body>
    </html>
  )
}
