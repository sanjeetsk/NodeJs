// Please don't change the pre-written code
// Import the necessary modules here
import fs from 'fs';

// Write your code here
const fsPromise = fs.promises;

async function log(logData){
  try{
    logData = `\n ${new Date().toString()} ${logData}`;
    await fsPromise.appendFile('log.txt', logData);
  }
  catch(err){
    console.log(err);
  }
}

export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  const logData = `\n req URL: ${req.url} \n reqBody: ${JSON.stringify(req.body)}`;
  await log(logData);
  next();
};

export default loggerMiddleware;
