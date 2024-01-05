// Please don't change the pre-written code
// Import the necessary modules here

let id = 3;
const products = [
  { id: 1, name: "iphone", price: 100000 },
  { id: 2, name: "oneplus", price: 50000 },
  { id: 3, name: "samsung", price: 60000 },
];

export const fetchAllProducts = () => {
  return products;
};

export const rateProductModel = (productId, userId, rating) => {
  // Write your code here
  const product = products.find(p => p.id == productId)

  // Check if there are any rating array if not then add rating array
  if (!product.ratings) {
    product.ratings = [];
    product.ratings.push({
      userId: userId,
      rating: rating
    })
    return product;
  }
  else {
    // check if rating already available for same user then update
    const existingRatingIndex = product.ratings.findIndex(r => r.userId == userId)
    if (existingRatingIndex != -1) {
      product.ratings[existingRatingIndex] = {
        userId: userId,
        rating: rating
      };
      return product;
    }
    else {
      // if no existing rating then and new rating
      product.ratings.push({ userId: userId, rating: rating })
      return product;
    }
  }
};
