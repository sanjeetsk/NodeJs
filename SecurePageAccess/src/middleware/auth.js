export const auth = (req, res, next) => {
  if(req.session.userEmail){
      next();
  }
  else{
      res.render('msgPage', {message:"login first to access secure page"})
  }
};
