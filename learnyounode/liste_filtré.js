// const fs = require('fs');
// const path = require('path');

// const args = process.argv[2];
// const extension = process.argv[3];

// fs.readdir(args.toString(), function callback(err, list) {
//     if (err) throw err;
//     let all = "";
//     for (i = 0; i < list.length; i++) {
//         let ext = path.extname(list[i]);
//         if (ext === '.' + extension) {
//             all += list[i] + '\n';
//         }
//     }
//     console.log(all);
// })

const mod = require('./module');

mod(process.argv[2].toString(), process.argv[3].toString(), function (err, data) {
    if (err) throw err;
    data.forEach(function (file) {
        console.log(file);
    });
})