const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req);
    res.writeHead(200, {"content-type":"text/plain"});
    res.end("hello node js from http module")
});

server.listen(3000, ()=>{
    console.log("server is live")
});