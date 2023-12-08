// Please do not change the prewritten code
const axios = require('axios');

const Solution = async () => {
  // Write your code here
  axios.get('https://api.codingninjas.com/api/v3/event_tags')
  .then(res => console.log(res.data))
  .catch(err => console.log(err));
};
Solution();
module.exports = Solution;
