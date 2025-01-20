import e from "express";
import productController from "../controllers/productController.js";
import pag from "../middlewares/pag.js";

const routes = e.Router();

routes.get("/product",productController.listAllProducts,pag);
routes.get("/product/busca",productController.listProducByFilter,pag);
routes.post("/product",productController.registerProduct);

export default routes;