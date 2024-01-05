// Please don't change the pre-written code
// Import the necessary modules here
import { fetchAllProducts } from "../../product/model/product.model.js";

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  // verify product
  const product = fetchAllProducts().find(p => p.id == productId);
  if(!product){
    return false;
  }
  
  const cartItem = new cartModel(userId, productId, quantity);
  cartItems.push(cartItem);
  return cartItems;
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here
  const cartItemIndex = cartItems.findIndex(item => item.id == cartItemId);
  if(cartItemIndex == -1){
    return false;
  }
  const deletedCart = cartItems.splice(cartItemIndex, 1);
  return deletedCart[0];
};
