import React from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
import CartProvider, {cartContext} from '../Components/Context/Context'

export default function StorePage() {
  return (
    <CartProvider>
    <div className='h-[100vh]'>
      <Navbar/>
      <div className='max-w-screen-2xl mx-auto'>

      <div className='px-10 py-20 lg:p-20 w-full relative' >
       <h2 className='text-[2.2rem] font-bold'>Our Latest Collections</h2>
       <Cards/>
      </div>

      </div>
    </div>
    </CartProvider>
  )
}
