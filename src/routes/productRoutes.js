import e from "express";
import productController from "../controllers/productController.js";
import pag from "../middlewares/pag.js";

const routes = e.Router();

routes.get("/products",productController.listAllProducts,pag);
routes.get("/products/find",productController.listProducByFilter,pag);
routes.get("/products/:id",productController.getProductsCart)
routes.post("/product/register",productController.registerProduct);
routes.post("/products",productController.addToCart);

export default routes;