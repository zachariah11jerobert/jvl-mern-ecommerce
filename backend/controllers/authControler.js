const catchAsyncError = require('../middlewares/catchAsyncError')
const User = require('../models/userModel')
const ErrorHandler = require('../utils/errorHandler')
exports.registerUser = catchAsyncError (async(req, res, next)=>{
    const {name, email, password, avatar} = req.body
    const user = await User.create({
        name,
        email,
        password,
        avatar
    })

    const token = 

    res.status(201).json({
        success: true,
        user,
        token  
    })
    
})

exports.logiinuser = catchAsyncError(async (req, res, next) => {
    const {email, password} = req.body

    if(!email || !password){
        return next(new ErrorHandler('please enter email & password',400))
    }

    //finding the user database 
    const user = User.findOne({email}).select('+password');

    if(!user) {
        return next(new ErrorHandler('please enter email & password',400))
    }

    if(){
        
    }
})