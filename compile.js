const path = require('path');
const fs = require('fs');
const solc = require('solc');



// 1) set path to solidity file 
const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');    // takes us from home directors to (i)current directory , (ii) contracts dir, (iii) sol file 


//2) read the file in utf8
const source = fs.readFileSync(lotteryPath, 'utf8');


//3) compile the source code, second argument is number of contracts to compile. 
module.exports = solc.compile(source, 1).contracts[':Lottery'];
// why do we add the colon before Inbox? We can add the file name before the colon. 





// this module.exports is pretty cool. It means another file cal access this variable without using a function to do so. 
// Instead of calling the output of the function, we simply select the parts of the object. In our case our inbox.test.js is
// using 'interface' and 'bytecode'
