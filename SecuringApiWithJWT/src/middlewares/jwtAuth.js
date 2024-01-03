// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
  // Write your code here
  //Read the token
  const token = req.cookies.jwtToken;

  // Check if token valid
  try{
    const payload = jwt.verify(
      token,
      "zM0stNH5QkQNXA6CRGwLXweGU0a7gXma"
    );
    console.log(payload);
  }
  catch(error){
    return res.status(401).json({ success: false, msg: error });
  }

  next();
};

export default jwtAuth;
