import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    productName: { type: String, required: [true,"Please you have to name your product!"] },
    price: { type: Number, required: [true,"All the products need to have a price!"] },
    department: { type: String, required: [true, "The department of your product is required"] },
    quantity: {
        type: Number, required: true,
        validade: {
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

});

const product = mongoose.model('products', productSchema);

export default product;