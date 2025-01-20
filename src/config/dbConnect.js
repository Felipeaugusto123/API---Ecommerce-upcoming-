import mongoose from "mongoose";

async function conectDb() {
    mongoose.connect("mongodb+srv://admin:1234@cluster0.o6xt5.mongodb.net/api?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
}

export default conectDb;