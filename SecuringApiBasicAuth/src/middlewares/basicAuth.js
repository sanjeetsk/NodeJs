// Please don't change the pre-written code
// Import the necessary modules here
import { getAllUsers } from '../features/user/model/user.model.js';

const basicAuthMiddleware = (req, res, next) => {
  // Write your code here

  // Check if authorization header is empty
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ "success": "false", "message": "no authorization details found"})
  }

  //Extract credentials
  const base64Credentials = authHeader.replace('Basic ', '');

  //Decode credentials
  const decodeCreds = Buffer.from(base64Credentials, 'base64').toString('utf8');

  const creds = decodeCreds.split(':');

  const user = getAllUsers().find(u => u.email == creds[0] && u.password == creds[1]);

  if(user){
    next();
  }

  else{
    return res.status(401).json({"success": "false", "message": "authorization failed"});
  }
};

export default basicAuthMiddleware;
