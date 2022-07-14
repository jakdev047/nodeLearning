/* Path Module */
const path = require('path');

const myPath = 'D:/js/node/nodeLearning/app.js';

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));
