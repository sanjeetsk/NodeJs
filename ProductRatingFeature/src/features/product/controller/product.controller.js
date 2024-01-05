// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here
import { getAllUsers } from "../../user/model/user.model.js";

import { fetchAllProducts, rateProductModel } from "../model/product.model.js";

export const getAllProducts = (req, res, next) => {
  const products = fetchAllProducts();
  res.json({ success: true, products });
};
export const getOneProduct = (req, res, next) => {
  res.json({ success: true, msg: "getOneProduct working" });
};
export const addProduct = (req, res, next) => {
  res.json({ success: true, msg: "addProduct working" });
};
export const rateProduct = (req, res, next) => {
  // Write your code here
  const userId = req.query.userId;
  const productId = req.query.productId;
  const rating = req.query.rating; // Parse rating as a number
  //validate user
  const user = getAllUsers().find(U => U.id == userId);
  if (!user) {
    return res.status(400).send({ success: false, msg: 'user not Found' });
  }

  // validate product
  const product = fetchAllProducts().find(p => p.id == productId)
  if (!product) {
    return res.status(400).send({ success: false, msg: 'product not Found' });
  }

  // validate rating
  const rate = parseFloat(rating)
  if (Number.isNaN(rate) || rate < 0 || rate > 5) {
    return res.status(400).send({ success: false, msg: 'rating should be b/w 0 and 5' });
  }


  const result = rateProductModel(productId, userId, rating);
  console.log(result);
  return res.status(200).json({ success: true, msg: result });
};
