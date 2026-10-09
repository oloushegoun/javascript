let url = process.argv[2];
const http= require('http');

http.get(url, function callback(response){
     response.setEncoding('utf8');
     response.on('data', function (data) {
        console.log(data);
      },
    ) 
}); 

    