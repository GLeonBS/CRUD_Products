import { Schema, model } from 'mongoose' 
const ProductSchema = new Schema ({
    name :{
        required: true,
        type: String
    },
    quantity :{
        required: true,
        type: Number
    },
    price :{
        required: true,
        type: Number
    },
    purchaseDate :{
        type: Date
    },
    deliveryDate :{
        type: Date
    },
}, {
    timestamps: true
})

export default model('Product', ProductSchema)