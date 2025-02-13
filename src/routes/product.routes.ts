import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers";

const productRoute = Router();

productRoute
  .post("/", createProduct)
  .get("/", getAllProducts)
  .get("/:id", getProduct)
  .put("/:id", updateProduct)
  .delete("/delete", deleteProduct);

export { productRoute };
