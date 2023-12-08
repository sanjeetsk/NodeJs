// Import required module
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const Solution = () => {
  // Write your code here
  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
    console.log(`The maximum of the two numbers is: `,Math.max(num1,num2));
    rl.close();
    });
  });

}


Solution();
module.exports = Solution;
