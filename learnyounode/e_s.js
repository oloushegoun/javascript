const fs = require('fs');

let args = process.argv.slice(2);

let str = (fs.readFileSync(args.toString())).toString();

let nbrSl = str.split("\n").length - 1;

console.log(nbrSl);