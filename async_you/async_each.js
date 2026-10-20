var http = require('http');
var async = require('async');

let urls = [process.argv[2], process.argv[3]];

async.each(
    urls,
    function (item, done) {
        http.get(item, function (res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
            });
            res.on('end', function () {
                return done();
            });
        });        
    },
    function (err) {
        if (err) console.log(err);
    }
)