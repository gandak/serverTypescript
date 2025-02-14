import { RequestHandler } from "express";
import { products } from "../database/products.db";

export const searchProducts: RequestHandler = (req, res) => {
  const value = req.query.query as string;

  console.log(value);

  if (!value) {
    res.send("Search value is empty!");
    return;
  }

  const foundProducts = products.filter((product) =>
    product.name.toLowerCase().includes(value.toLowerCase())
  );

  if (!foundProducts) {
    res.send("No products found");
    return;
  }

  res.send(foundProducts);
};
