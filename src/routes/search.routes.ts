import { Router } from "express";
import { searchProducts } from "../controllers/search.controller";

const searchRoute = Router();

searchRoute.get("/search", searchProducts);

export { searchRoute };
