import express from 'express';
import register from './registerRoutes.js';
import login from './loginRoutes.js';
import products from './productRoutes.js';

const routes = (app)=>{
    app.route("/").get((req,res) =>res.status(200).send("ApiEcommerce"));

    app.use(express.json(),register,login,products);
}

export default routes;