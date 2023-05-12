const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "please enter product name"],
        trim: true,
        maxLength:[100,"product name cannot exceed 100 characters"] 
    },
    price:{
        type: Number,
        required: true,
        default:0.0
    },
    description:{
        type: String,
        required:[true, "please enter product description"]
    },
    ratings: {
        type: String,
        default:0,
    },
    Image: [
        {
            Image: {
                type: String,
                required:true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "please enter product  category"],
        enum: {
            va_ues: [
                'Electroics',
                'Mobile phones',
                'Laptops',
                'accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beaty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            massage :"Plezse select correct  category"    
        }
    },
    seller: {
        type: String,
        required:[true, "please enter product seller"]
    },
    stock: {
        type:Number,
        required:[true, "please enter product stock"],
        maxLength: [20,'Product stock cannot exceed 20' ]
    },
    numOfReviews: {
        type:Number,
        default: 0
    },
    reviews: [
        {
            name:{
                type: String,
                required:true
            },
            rating: {
                type: String,
                required: true
            },
            Comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt:{
        type: DataTransfer,
        default: data.now()
    }
})

let schema = mongoose.model('Product', productSchema)

module.exports = schema