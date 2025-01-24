import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    email:{type: String,required:true},
    userName:{type:String,required:true},
    password:{type:String,required:true},
    shopping:[{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
},{versionKey:false});

const register = mongoose.model("users",registerSchema);

export default register;