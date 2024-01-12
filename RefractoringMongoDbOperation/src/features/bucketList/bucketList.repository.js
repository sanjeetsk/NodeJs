// Please don't change the pre-written code
// Import the necessary modules here

import { getDB } from "../../config/mongodb.js";

class BucketListRepository {
  async addBucketListItem(bucketListItem) {
    // Write your code here
    const db = getDB();
    const collection = db.collection("bucketListItems");
    await collection.insertOne(bucketListItem);
    return bucketListItem;
  }

  async findOneBucketListItem(title) {
    // Write your code here
    const db = getDB();
    const collection = db.collection("bucketListItems");
    const item = await collection.findOne({title})
    return item;
  }
}

export default BucketListRepository;
