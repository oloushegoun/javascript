var http = require('http');
var async = require('async');

let urls = [process.argv[2], process.argv[3]];

async.map(
    urls,
    function (item, done) {
        http.get(item, function (res) {
            res.setEncoding('utf8');
            let body = '';
            res.on('data', function (chunk) {
                body += chunk;
            });
            res.on('end', function () {
                return done(null, body);
            });
        });        
    },
    function (err, results) {
        if (err) console.log(err);
        console.log(results);
    }
)