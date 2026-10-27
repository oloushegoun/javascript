let arg1 = process.argv[2];
let http = require('http');
let async = require('async');

async.reduce(['one', 'two', 'three'],
    0,
    function (memo, item, callback) {
        http.get(arg1 + `?number=${item}`, function (response) {
            if (response.statusCode !== 200) {
                return callback(new Error(`Server responded with ${response.statusCode}`));
            }
            response.setEncoding('utf8');
            let body = '';
            response.on('data', function (chunk) {
                body += chunk;
            });
            response.on('end', function () {
                callback(null, memo + Number(body));
            });
        }).on('error', callback)
    }, function (err, result) {
        if (err) throw err;
        console.log(result);
    }
)
