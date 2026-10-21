let arg1 = process.argv[2];
let arg2 = process.argv[3];

let http = require('http');
let async = require('async');
async.series(
    {
        first: function (callback) {
            async.times(5, function (i, cb) {
                const data = JSON.stringify({
                    "user_id": i + 1,
                });
                var request = {
                    host: arg1,
                    port: arg2,
                    path: '/users/create',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(data),
                    },
                }
                const req = http.request(request, function (response) {
                    response.setEncoding('utf8');
                    let body = '';
                    response.on('data', function (data) {
                        body += data;
                    })
                    response.on('end', function () {
                        return cb(null, body);
                    });
                })

                req.write(data);
                req.end();
            }, function (err, results) {
                if (err) throw (err);
                callback(null, results);
            }
            )
        },

        second: function (callback) {
            var request = {
                host: arg1,
                port: arg2,
                path: '/users',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const req = http.request(request, function (response) {
                response.setEncoding('utf8');
                let body = '';

                response.on('data', function (data) {
                    body += data;
                });

                response.on('end', function () {
                    callback(null, body);
                });
            });

            req.end();

        },
    }, function (err, results) {
        if (err) throw err;
        console.log(results.second);
    }
)