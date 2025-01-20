import mongoose from "mongoose"

mongoose.connect(process.env.DB_CONNECT_STRING);

let conectDb = mongoose.connection;

export default conectDb;