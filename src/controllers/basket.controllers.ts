import { RequestHandler } from "express";
import { products } from "../database/products.db";

export const addToBasket: RequestHandler = (req, res) => {
  const query = req.query.query as string;

  if (!query) {
    res.send("Search value is empty!");
    return;
  }

  const foundProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!foundProducts) {
    res.send("No products found");
    return;
  }

  res.send(foundProducts);
};
