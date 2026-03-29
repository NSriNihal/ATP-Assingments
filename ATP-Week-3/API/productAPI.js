  //create product API with below operators

  //create new product({productId,name,brand,price})
  //read all products
  //read all products by brand
  //update a product
  //delete a product by id 

import exp from 'express'
export const productApp = exp.Router()
 let products = []

function validatePrice(price){
  const pPrice =Number(price)
  if (pPrice <10000){
    return 'Min price is 10000'
  }
  if(pPrice >50000){
    return 'Max price is 50000'
  }

  
}

  productApp.get('/products',(req,res)=>{
    res.json({message:"All Products",payload:products})
  })

  productApp.get('/products/:brand',(req,res)=>{
    let BrandName = req.params.brand
    let product = products.find((prodObj)=>prodObj.brand == BrandName)
    if(product == undefined){
      return res.json({message:"Product not found"})
    }
    res.json({message:"Product Information",payload:product})
  })

  productApp.post('/products',(req,res)=>{
    const newProduct = req.body
    const priceError = validatePrice(newProduct.price)
    if (priceError) {
      return res.status(400).json({ message: priceError })
    }

    newProduct.price = Number(newProduct.price)
    console.log(newProduct)
    products.push(newProduct)
    res.json({message:"Product Added"})
  })
  productApp.put('/products/:id',(req,res)=>{
    let idOfProduct = Number(req.params.id)
    let modedProduct = req.body
    const priceError = validatePrice(modedProduct.price)
    if (priceError) {
      return res.status(400).json({ message: priceError })
    }

    modedProduct.price = Number(modedProduct.price)
    let index = products.findIndex((prodId)=>prodId.id === idOfProduct.id)
    if(index == -1){
      return res.json({message:"product not found"})
    }
    products.splice(index,1,modedProduct)
    res.json({message:"Product updated"})
  })

  productApp.delete('/products/:id',(req,res)=>{
    let idOfProduct = Number(req.params.id)
    let index = products.findIndex((prodId)=>prodId.id === idOfProduct)
    if(index == -1){
      return res.json({message:"product not found"})
    }
    products.splice(index,1)
    res.json({message:"Product Deleted"})
  })
