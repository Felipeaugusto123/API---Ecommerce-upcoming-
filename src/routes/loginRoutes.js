import e from "express";
import LoginController from "../controllers/loginController.js";

const routes = e.Router();

routes.post("/login",LoginController.login);

export default routes;