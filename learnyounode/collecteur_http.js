let arg = process.argv[2];
const bl = require('bl');

const http = require('http');

// http.get(arg, function (response) {
//     response.setEncoding('utf8');
//     let totalData = '';
//     response.on('data', function (event) {
//         totalData += event;
//     })
//     response.on('end', function () {
//         console.log(totalData.length);
//         console.log(totalData);
//     })
// })

// Alternate solution using bl module
http.get(arg, (resp) => {
    resp.pipe(bl((error, data) =>{
        if (error) {
            return console.error(error);
        }
        console.log(data.length);
        console.log(data.toString());
    }))
})

