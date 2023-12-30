import express from 'express';
import { getTweets, createTweet} from './tweet.controller.js';

const tweetRouter = express.Router();

tweetRouter.get("/", getTweets);

tweetRouter.post("/", createTweet);

export default tweetRouter;