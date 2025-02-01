import React, {useState,useEffect} from 'react'
import Add_to_Cart from './Add_to_Cart'
import axios from 'axios'

export default function Cards() {

     const [shoes, setShoes] = useState([])

    useEffect(() => {

      const FetchData = async() => {
        
       try{
        
        const response = await axios.get('https://dummyjson.com/products/category/mens-shoes')
        
        console.log(response.data.products)
         setShoes(response.data.products)
        

       } 
       catch(error){
        console.log("Error while fetching", error)
       }

      }
      
      FetchData()
    },[])


  return (
    <div className='grid grid-cols-[auto-fit,minmax(10rem, 23rem)] gap-y-10 justify-self-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 justify-items-center py-10'>
    {shoes.map((shoe) => (  
      <div key={shoe.id}>
       <div>
       <img src={shoe.thumbnail} alt="image" className='rounded-xl object-cover w-full h-full'/>
       </div>
       <div className='space-y-3 py-2'>
         <h3 className='font-bold'>{shoe.brand}</h3>
         <p className='line-clamp-3'>{shoe.description}</p>
         <p>Rating: {shoe.rating}</p>
         <p>{shoe.price}$</p>
         <Add_to_Cart />
       </div>
      </div>
))}
    </div>
  )
}
