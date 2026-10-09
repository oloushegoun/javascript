const fs = require('fs');
const path = require('path');

module.exports = function filterDir(args, extension, callback) {
    fs.readdir(args.toString(), function call(err, list) {
        if
            (err) return callback(err)
        let all = []; for (i = 0; i < list.length; i++) {
            let ext = path.extname(list[i]);
            if (ext === '.' + extension) {
                all.push(list[i]);
            }
        }
        callback(null, all);

    })
}