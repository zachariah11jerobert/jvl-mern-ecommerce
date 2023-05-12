const product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncError')
//Get Products - /api/v1/products
exports.getProducts = async (req, res, next)=>{
    const products = await Product.find();
    res.status(200).json({
        success :true,
        count: products.length,
        products
    })
}

//Creat Product - /api/v1/product/new
exports.newProduct =catchAsyncError (async (req, res, next)=>{
   const product = await Product.create(req.body);
   res.status(201).json({
    success: true,
    Product
   })
});

//Get Single Product - api/v1/product/:id
exports.getSingleProduct = async(req, res, next) =>{
    const Product = await product.findById(req. params.id);

    if(!product){   
       return next(new ErrorHandler('product not found test', 400))
    }

    res.status(201).json({
        success: true,
        product
    })
}

//Update Product - api/v1/product/:id
exports.updataeProduct = async (req, res, next) =>{
    let Product = await Product.findById(req.params.id);


    if(!product){
        res.status(404).json({
            success: false,
            message: "Product no found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidations: true
    })

    res.status(200).json({
        success:true,
        product
    })

}

//Delete Product - api/v1/product/:id
exports.deleteProduct = async (req, res, next) =>{
    const Product = await product.findById(req. params.id);

    if(!product){
        res.status(404).json({
            success: false,
            message: "Product no found"
        })
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product Deleted"
    })
}