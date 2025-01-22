import mongoose from "mongoose";
const shoppingSchema = new mongoose.Schema({
    id: { type: Number, required: [true] },
    productName: { type: String, required: [true, "Please you have to name your product!"] },
    price: { type: Number, required: [true, "All the products need to have a price!"] },
    department: { type: String, required: [true, "The department of your product is required"] },
    quantity: {
        type: Number, required: true,
        validate: {
            validator: (valor) => {
                return valor >= 1;
            },
            message: "Quantity have to be greater than 1"
        }

    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', required: true
    }
})

const shopping = mongoose.model('shopping',shoppingSchema);

export default shopping;