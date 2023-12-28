//const {console} = require('console')
const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 3008;
const server= http.createServer((req,res)=>{
    
    res.setHeader('Content-Type','text/html');
    console.log(req.url);
    if (req.url== "/"){

        res.statusCode=200;
        const data =fs.readFileSync('index.html');
        res.end(data.toString());

    }
    else if (req.url=="/about"){
        res.statusCode=200;

        res.end('<h1>This is about header</h1>');

    }
    else if(req.url=='/cwh'){
        res.statusCode=200;

        res.end('<h1>This is cwh header</h1>');
        
    }
    else{    
        res.statusCode=404;

        res.end('<h1>This is not found</h1>');   
    }
});

server.listen(port,()=>{console.log(`server is listening on port ${port}`)});
