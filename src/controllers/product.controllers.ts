import { RequestHandler } from "express";
import { products } from "../database/products.db";

export const createProduct: RequestHandler = (req, res) => {
  const { name, description, price, stock, category, images } = req.body;

  const isRegistered = products.find((product) => product.name == name);

  console.log(isRegistered);

  if (isRegistered) {
    res.send("This product already exists");
    return;
  }

  const newId = products.length > 0 ? products[products.length - 1]._id + 1 : 1;

  const newProduct = {
    _id: newId,
    name,
    description,
    price,
    stock,
    category,
    images,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  products.push(newProduct);

  res.send("Succesfully added");
};

export const getAllProducts: RequestHandler = (req, res) => {
  res.send(products);
};
export const getProduct: RequestHandler = (req, res) => {
  const { id } = req.params;

  const foundProduct = products.find((products) => products._id == Number(id));

  foundProduct
    ? res.send(foundProduct)
    : res.send(`id: "${id}" product not found!`);
  return;
};

export const updateProduct: RequestHandler = (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, category, images } = req.body;

  const foundProduct = products.find((products) => products._id == Number(id));

  if (!foundProduct) {
    res.send("Product not found");
    return;
  }

  if (name) foundProduct.name = name;
  if (description) foundProduct.description = description;
  if (price) foundProduct.price = price;
  if (stock) foundProduct.stock = stock;
  if (category) foundProduct.category = category;
  if (images) foundProduct.images = images;

  res.send("Product details updated!");
};

export const deleteProduct: RequestHandler = (req, res) => {
  const { id } = req.params;
  const newArray = products.filter((products) => products._id != Number(id));

  products.length = 0;
  products.push(...newArray);

  res.send("Product deleted");
};
