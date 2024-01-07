// Please don't change the pre-written code
// Import the necessary modules here
import { logger} from "./logger.middleware.js";

export class customErrorHandler extends Error {
  // Write your code here
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  // Write your code here
  const message = err.message ||  "Oops! Something went wrong... Please try again later!";
  logger.log({
    'level': 'error',
    'timestamp': new Date().toString(),
    'request URL': req.originalUrl,
    'error message': message
  })
  next();

  if(err instanceof customErrorHandler){
    return res.status(err.statusCode).send(err.message);
  }

  // unhandled error  

  return res.status(500).send( "Oops! Something went wrong... Please try again later!");
};
