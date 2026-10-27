const http = require('http');
const https = require('https');
const async = require('async');

const url = process.argv[2];
const client = url.startsWith('https') ? https : http;

let found = false;
let count = 0;

async.whilst(
    function test(cb) {
        cb(null, !found);
    },

    function (done) {
        client.get(url, function (response) {
            response.setEncoding('utf8');
            let body = '';
            response.on('data', function (data) {
                body += data;
            });
            response.on('end', function () {
                count++;
                if (body.includes('meerkat')) {
                    found = true;
                }
                done();
            });
        }).on('error', done);
    },

    function final(err) {
        if (err) {
            console.error("Une erreur est survenue :", err);
        } else {
            console.log(count);
        }
    }
);