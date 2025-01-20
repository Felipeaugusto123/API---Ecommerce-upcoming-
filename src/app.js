import e from "express";
import routes from "./routes/index.js";
import conectDb from "./config/dbConnect.js";

const conection = await conectDb();

conection.on("error",(err) =>{
    console.log("error:",err);
    
})

conection.once("open",()=>{
    console.log("conected in DB");
    
})

const app = e();

routes(app)

export default app;