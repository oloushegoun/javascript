const bl = require('bl');

const http = require('http');

let listUrl = [process.argv[2], process.argv[3], process.argv[4]];

function getUrl(i) {
    http.get(listUrl[i], (response) => {
        response.pipe(bl((error, data) => {
            if (error) {
                console.error(error);
            } else {
                console.log(data.toString());
                if (i < listUrl.length - 1) {
                    getUrl(i + 1);
                }
            }
        }))
    })
}
getUrl(0);
