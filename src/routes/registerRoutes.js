import e from "express";
import RegisterController from "../controllers/registerController.js";

const routes = e.Router();

routes.post("/register",RegisterController.registerUser);

export default routes;