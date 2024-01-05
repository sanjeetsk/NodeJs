// Please don't change the pre-written code
// Import the necessary modules here
import { addToCart, removeFromCart } from "../model/cart.model.js";

export const addToCartController = (req, res) => {
  // Write your code here
  const userId = req.userId;
  const productId = req.query.productId;
  const quantity = req.query.quantity;
  const result = addToCart(userId, productId, quantity);
  if(!result){
    return res.status(404).json({ success: false, msg: 'Product not found.'});
  }
  return res.status(201).json({ success: true, item: result});
};

export const removeFromCartController = (req, res) => {
  // Write your code here
  const userId = req.userId;
  const cartItemId = req.params.itemId;
  const removeCartItem = removeFromCart(userId, cartItemId)
  if (!removeCartItem) {
    return res.status(404).json({success:false, msg:"operation not allowed"})
  }
  return res.status(200).json({success:true, deletedCartItem: removeCartItem});
};
