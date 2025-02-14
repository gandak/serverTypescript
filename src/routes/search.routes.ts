import { Router } from "express";
import { searchProducts } from "../controllers/search.controller";

const searchRoute = Router();

searchRoute.get("/", searchProducts);

export { searchRoute };
