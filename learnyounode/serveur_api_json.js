let arg = process.argv[2];
const http = require('http');
const server = http.createServer((req, res) => {
    const met = req.method;
    let url = new URL(req.url, 'http://localhost'); if (met === 'GET') {
        if (url.pathname === '/api/parsetime') {
            res.writeHead(200, { 'Content-Type': 'application/json' })

            let valeur = url.searchParams.get('iso');

            let date = new Date(valeur);

            let data = {
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds(),
            }

            res.end(JSON.stringify(data));
            console.log(data);
        }
        else if (url.pathname === '/api/unixtime') {
            res.writeHead(200, { 'Content-Type': 'application/json' })

            let valeur = url.searchParams.get('iso');

            let date = new Date(valeur);

            let seconds = date.getTime();

            let data = {
                "unixtime": seconds,
            }

            res.end(JSON.stringify(data));
            console.log(data);

        }
    }
})
server.listen(arg);