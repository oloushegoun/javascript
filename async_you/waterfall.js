let arg = process.argv[2];
var http = require('http');
let fs = require('fs');
var async = require('async');

async.waterfall([
    function(cb) {
        fs.readFile(arg, function callback(err, data) {
            if (err) throw err;
            let str = data.toString();
            cb(null, str);
        })
    },

    function (str, cb) {
        http.get(str, function (response) {
            response.setEncoding('utf8');
            let body = '';
            response.on('data', function (data) {
                body += data;
            })

            response.on('end', function () {
                return cb(null, body);
            });
        })
    }

], function (err, resultatFinal) {
    if (err) {
        return console.error(err);
    }
    console.log(resultatFinal);
});







