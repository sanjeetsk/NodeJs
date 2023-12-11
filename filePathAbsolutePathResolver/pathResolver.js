const path = require("path");

exports.getAbsolutePath = (filePath) => {
  // Write your code here
  const absPath = path.resolve(filePath);
  return absPath;
};
