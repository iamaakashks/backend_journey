const http = require('http')

const server = http.createServer((req, res)=>{
    const url = req.url;
    console.log(url);
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/plain'})
        res.end("Route is home route with /")
    }else if(url === '/projects'){
        res.writeHead(200, {'content-type':'json'})
        res.end(JSON.stringify({"projects" : "Project are below"}))
    }else{
        res.writeHead(404, {"content-type": "text/plain"})
        res.end("NOT FOUND")
    }
});

const port = 3000;
server.listen(port, ()=>{
    console.log("server is live")
})