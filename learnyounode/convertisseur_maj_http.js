let arg = process.argv[2];
const http = require('http');
const map = require('through2-map');
const server = http.createServer((req, res) => {
    const methode = req.method;
    if (methode === 'POST') {
        let data = req.pipe(map(function (chunk) {
            return chunk.toString().split('').map((e) => e.toUpperCase()).join('')
        })).pipe(res);
        console.log(data);
    }
})
server.listen(arg);