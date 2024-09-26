// const e = require('express');
    const express = require("express")

    const app = express()

    // app.use(express)()

    app.use(express.json())

    app.get('/api/products',(req,res)=>{
        res.status(200).json(products)
    })

    const PORT = 3000

    app.listen(PORT,()=>{
        console.log("listening on port"+ PORT);
        
    })

    let products = [
   
                {
                    "id": 1,
                    "title": "lap top",
                    "price": 500,                        
                },
                {
                    "id": 2,
                    "title": "watch",
                    "price": 499,                        
                },
                {
                    "id": 3,
                    "title": "TV",
                    "price": 649,                        
                },
                {
                    "id": 4,
                    "title": "AC",
                    "price": 299,                        
                },
                {
                    "id": 5,
                    "title": "tab",
                    "price": 599,                        
                },
                {
                    "id": 6,
                    "title": "phone",
                    "price":998,                        
                },
                
                
            ]
        

    app.get('/api/products',(req,res)=>{
        res.status(200).json(posts)
    })

    app.post('/api/products',(req,res)=>{
        const newproduct ={
       
            id: req.body.id,
            title: req.body.title,
            price: req.body.price
        }
         
        products.push(newproduct)
        res.status(200).json(products)
    })

    app.get('/api/products/:id',(req,res)=>{
        const product = products.find(p => p.id === req.params.id);
        if(!product) {
            return res.status(404).send("page not found");
        }
        res.status(200).json(product)
    })

    app.put('/api/products/:id',(req,res)=>{
        const product = products.find((p)=>p.id === parseInt(req.params.id))
        if(!product){
           res.status(404).send("product not found")
        }
        else{
            product.id = req.body.id,
            product.title = req.body.title,
           product.price = req.body.price
           res.status(200).json(products)
        }
   })

   app.delete('/api/products/:id',(req,res)=>{
    const pid = parseInt(req.params.id)
    const product = products.find((P)=>P.id === pid)
    if(!product){
        res.status(404).send("No product found")
    }
    else{
        products = products.filter((p)=>p.id !==pid)
        res.status(200).json(products)
    }
})




   