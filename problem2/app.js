// Note:  Please do not change the prewritten code

// import the required module here

const mathMod = require('./math');

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    // write your code here to Display the results of the calculations on the console.
    const result1 = mathMod.sum(nums);
    console.log(`The sum is ${result1}.`);
    const result2 = mathMod.mean(nums);
    console.log(`The mean is ${result2}.`);
};
Solution();
module.exports = Solution;
