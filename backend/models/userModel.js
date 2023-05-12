const mongoose = require('mongoose');
const validator = require('valitor')

const userSchame = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'please enter name']
    },
    email :{
        type: String,
        required: [true, 'please enter name'],
        unique: true,
        validate: [validator.isEmail, 'please enter valid email address']
    },
    password : {
        type: String,
        required: [true, 'please enter password'],
        maxlength: [6, 'password cannot exceed 6 characters'],
    },
    avatar : {
        type: String,
        required: true
    },
    role : {
        type: String,
      default: 'user'
    },
    resetPasswortToken: String,
    resetPasswortTokenExpire: Date,
    createdAt : {
        type: Date,
      default: Date.now
    },
})



userSchame.pre('save', async function (next){
    this.password = await bcrypt.hash(this.password, 10)
})

userSchame.methods.getJwtToken = function(){
    jwt.sign({id: this.id}, process.env.jwt_SECRET,{
        expiresIn: process.env.jwt_EXPIRES_TIME
    })
}


userSchame.methods.isValidPassword = 

let model = mongoose.model('User', userSchame);

module.exports = model