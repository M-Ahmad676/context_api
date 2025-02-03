import React, {useContext}  from 'react'
import { FaOpencart } from "react-icons/fa";
import { GiRunningShoe } from "react-icons/gi";
import { cartContext } from './Context/Context';


function Navbar() {

  const {item} = useContext(cartContext) 

  return (
    <div className='flex w-full justify-between items-center px-8 sm:px-20 h-[5rem] bg-white shadow-sm shadow-gray-400'>

     <div>
      <GiRunningShoe className='text-[2rem]'/>
      <h3 className='font-medium italic'>Stride</h3>
     </div>

     <ul className='hidden md:flex gap-x-16'>
        <li><a href=''>Store</a></li>
        <li><a href=''>Categories</a></li>
        <li><a href=''>About</a></li>
        <li><a href=''>Contact</a></li>
     </ul>

     <div className='relative'>
      {item > 0 && ( 
        <span className={`h-4 w-4 absolute bg-black text-xs rounded-full font-medium text-white flex justify-center items-center -right-2 -top-2`}>{item}</span>
      )}
 <FaOpencart className='text-[1.7rem] cursor-pointer'/>  
     </div>

    </div>
  )
}

export default Navbar
