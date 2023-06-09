import { Navbar } from './components/navbar'
import './globals.css'
import {Nunito} from 'next/font/google'
export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font= Nunito({subsets:['latin']})

 const  RootLayout=({
  children,
}: {
  children: React.ReactNode
}) =>{
  return (
    <html lang="en">
     
      <body className={font.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
export default RootLayout;