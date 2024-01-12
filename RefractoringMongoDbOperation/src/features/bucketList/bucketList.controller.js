import BucketListModel from "./bucketList.model.js";
import BucketListRepository from "./bucketList.repository.js";

export default class BucketListController {
  constructor() {
    this.bucketListRepository = new BucketListRepository();
  }
  add = async (req, res) => {
    try {
      const { title, description, dateAdded, targetDate, isCompleted } = req.body;
      // Refactor to use the repository method
      const item = new BucketListModel(
        title,
        description,
        dateAdded,
        targetDate,
        isCompleted
      );
      const record = await this.bucketListRepository.addBucketListItem(item);
      return res.status(201).send(record);
    }
    catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }
  };

  get = async (req, res) => {
    try {
      const { title } = req.query;
      const item = await this.bucketListRepository.findOneBucketListItem(title);
      if (!item) {
        return res.status(200).send("Item not found.");
      } else {
        return res.status(200).send(item);
      }
    }
    catch (err) {
      console.log(err);
      throw new Error("Something went wrong");
    }
  };
}
