let arg = process.argv[2];
let arg1 = process.argv[3];
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    let file = fs.createReadStream(arg1).pipe(res);
    console.log(file);
})
server.listen(arg);