import app from "./src/app.js";

const PORT = 3000;

app.get("/",(req,res)=>{
    res.status(200).send("Api Ecommerce");
})

app.listen(PORT,(req,res)=>{
    console.log("Starting server");
    
})