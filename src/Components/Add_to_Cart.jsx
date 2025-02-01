import React, {useContext} from 'react'
import { cartContext } from './Context/Context'

export default function Add_to_Cart() {
  
  const {handleCart} = useContext(cartContext)

  return (
    <>
     <button className='bg-black py-1.5 px-3 text-white rounded-md hover:bg-[#000000b4]' onClick={handleCart}>
      Add to Cart
      </button> 
    </>
  )
}
