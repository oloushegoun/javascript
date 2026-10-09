let port = process.argv[2];

const net = require('net');

const server = net.createServer((socket) => {
    let data = "";
    let date = new Date();
    let year = date.getFullYear();
    let mont = (date.getMonth()+ 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let hour = date.getHours().toString().padStart(2, '0');
    let min = date.getMinutes().toString().padStart(2, '0');
    data += year + "-" + mont + "-" + day + " " + hour + ":" + min + "\n";
    socket.end(data);
});

server.listen(port);