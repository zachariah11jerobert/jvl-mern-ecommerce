const products = require('../data/products.json');
const product = require('../models/productModel');
const dotenv = require('dotenv');
const connctDatabase = require('../config/database')

dotenv.config({path:'backend/config/config.env'});
connctDatabase();

const seedProducts = async ()=>{
    try{
    await product.deleteMany();
    console.log('Products deleted');
    await product.insertMany();
    console.log('All products added');
}catch(erroe){
    console.log(error.message);
}
process.exit();
}

seedProducts();