// Import the necessary modules here
import ProductModel from "../models/product.model.js";
// import path from 'path';

export default class ProductController {

  constructor() {
    this.productModel = new ProductModel();
  }

  getProducts = (req, res) => {
    //  Write your code here
    const fetchedProducts = this.productModel.fetchProducts();
    // console.log(fetchedProducts);
    res.send(fetchedProducts);
  };
}
