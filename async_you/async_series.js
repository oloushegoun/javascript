let arg1 = process.argv[2];
let arg2 = process.argv[3];
let http = require('http');
let async = require('async');

async.series(
    {
        requestOne: function (done) {
            http.get(arg1, function (response) {
                response.setEncoding('utf8');
                let body = '';
                response.on('data', function (data) {
                    body += data;
                })

                response.on('end', function () {
                    return done(null, body);
                });
            })
        },
        requestTwo: function (done) {
            http.get(arg2, function (response) {
                response.setEncoding('utf8');
                let body = '';
                response.on('data', function (data) {
                    body += data;
                })

                response.on('end', function () {
                    return done(null, body);
                });
            })
        },
    },
    function(err, results){
        if (err) throw err;
        console.log(results);
    }
);