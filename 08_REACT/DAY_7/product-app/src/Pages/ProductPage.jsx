import React , {useEffect, useState} from 'react'
import ViewProduct from './ViewProduct'

function ProductPage() {



    //1 Define base Url 

    const baseUrl = 'https://dummyjson.com/products'

    //4 state creation for holding products details
    const [products,setProducts]=useState([])

    //2 Define API fetching function

    const productfetch = async ()=>{
        const response =  await fetch(baseUrl)
        .then(response=>response.json())
        .then(arraydata=>setProducts(arraydata.products))
        console.log(products);
        
    }
    //3 function

    useEffect(()=>{
        productfetch()
    },[])

  return (
    <div>
        {
                    <ViewProduct data={products}/>

        }
        
    </div>
  )
}

export default ProductPage