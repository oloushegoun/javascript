const fs = require('fs');

let args = process.argv.slice(2);

fs.readFile(args.toString(), function callback(err, data) {
    if (err) throw err;
    let str = data.toString();
    let nbrSl = str.split("\n").length - 1;
    console.log(nbrSl);
});


