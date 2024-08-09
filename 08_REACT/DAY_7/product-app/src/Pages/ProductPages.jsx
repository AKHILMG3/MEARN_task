import React, { useEffect, useState } from 'react'
import ViewProduct from './ViewProduct'

function ProductPages() {

    const baseUrl = 'https://dummyjson.com/products'  

    const [products,setProducts] = useState([])

    const productfetch = async()=>{
        const response=await fetch(baseUrl)
        .then(response=>response.json())
        .then(arraydata=>setProducts(arraydata.products))
        console.log(products);
        
    }
    useEffect(()=>{
        productfetch()
    })

   

  return (
    <div>
        {
            <ViewProduct data={products}/>
        }
    </div>
  )
}

export default ProductPages