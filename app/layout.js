import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Tu Kiosco',
  description: 'Templates para Mercados o Kioscos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
