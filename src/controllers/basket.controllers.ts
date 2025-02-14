import { RequestHandler } from "express";
import { products } from "../database/products.db";
import { users } from "../database/users.db";
import { baskets } from "../database/basket.db";

export const addToBasket: RequestHandler = (req, res) => {
  const { userId, productId } = req.body;

  const isUserFound = users.find((user) => user._id === userId);

  if (!isUserFound) {
    res.send("User not found");
    return;
  }

  const isProductFound = products.find((product) => product._id === productId);

  if (!isProductFound) {
    res.send("Product not found");
    return;
  }

  const basketFound = baskets.find((basket) => basket.userId === userId);

  basketFound
    ? basketFound.productIds.push(productId as never)
    : baskets.push(req.body);

  res.status(200).json({ message: "foundProducts" });
};
