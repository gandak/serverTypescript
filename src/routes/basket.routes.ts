import { Router } from "express";
import { addToBasket } from "../controllers/basket.controllers";

const basketRoute = Router();

basketRoute
  .post("/", addToBasket)
  .get("/")
  .put("/:productId")
  .delete("/:productId");

export { basketRoute };
