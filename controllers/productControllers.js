const Product = require("../models/productModel")

const getAllProducts =async(req,res)=>{
   try{
    const allProducts = await Product.find({})

    if(!allProducts){
        res.status(404).json({
            message:"Products not found"
        })
    }

    res.status(200).json({
        message:"products fetched successfully",
        data:allProducts
    })

   }catch(err){
    console.log(err)
    res.status(500).json({
        message:"something went wrong"
    })
   }
}

const addProducts =async(req,res)=>{
  try{
 const {name,mrp,expire,quantity} = req.body;

  const newProd = await Product.create({
    name,mrp,expire,quantity
  })
  res.status(201).json({
    message:"prodcut added successfully"
  })
  }catch(err){
    console.log(err)
    res.status(500).json({
        message:"something weent wronmg"
    })
  }

    
}

const updateProducts =async(req,res)=>{
    const {id,name} = req.body
try{

}catch(err){
    
    const updateprod = await Product.findByIdAndUpdate({id})

    updateprod.name=req.body.name

    await updateprod.save()

    res.status(200).json({
        message:"updated successfully",
        data:updateprod
    })
}


}

const deleteProducts =async(req,res)=>{
    try{
        const {id}=req.body
        const deleteProd = await Product.findByIdAndDelete({id})

        res.status(200).json({
            message:"deleted succesffully"
        })

    }catch(err){
        


    res.status(500).json({
        message:"somthing went wrong"
    })
    }
}

module.exports = {getAllProducts,addProducts,updateProducts,deleteProducts}