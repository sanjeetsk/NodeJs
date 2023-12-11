// Please don't change the pre-written code
// Import the necessary modules here

const fs = require('fs');

const Solution = () => {
  // Write your code here
  // Creating and Writing a file 
  fs.writeFileSync("notes.txt","The world has enough coders ");

  //Reading file
  const buffer = fs.readFileSync('notes.txt', {encoding: 'utf8'});
  console.log(buffer);

  // Appending Data to existing file
  fs.appendFileSync('notes.txt', 'BE A CODING NINJA!');
  
  //Reading updated file
  const buffer1 = fs.readFileSync('notes.txt', {encoding: 'utf8'});
  console.log(buffer1);

};
Solution();
module.exports = Solution;
