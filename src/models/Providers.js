import mongoose from 'mongoose'
import validator from 'validator'


const providerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    lowest_price: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    max_speed: {
        type: String,
        lowercase: true
    },
    description: {
        type: String,
        trim: true
    },
    contact_no: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email Address')
            }
        }
    },
    image: {
        type: String,
    },
    url: {
        type: String,
    }
})

providerSchema.methods.toJSON = function () {
    const providerObj = this.toObject()
    delete providerObj.__v
    return providerObj
}


const Provider = mongoose.model('Providers', providerSchema)

export default Provider