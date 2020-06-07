const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
             if(!validator.isEmail(value)) {
                 throw new Error('Email is invalid.')
             }
         }
    }
    /*password: {
        require: true,
        type: String,
        trim: true,
        minlength: 8,
        validate(value) {
            //if
        }
    }*/
})



userSchema.methods.getAuthenticationToken = async function () {
    const user = this
    const token =jwt.sign({ _id: user._id.toString() }, 'SuperSecretKey')
    await user.save()
    console.log(token)
    return token

}



const User = mongoose.model('User', userSchema)
module.exports = User