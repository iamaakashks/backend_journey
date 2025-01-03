const http = require('http');
const fs = require('fs');
const url = require("url")

const myserver = http.createServer((req, res)=>{
    const log = `${Date.now()}: ${req.url} -> New Req Recieved\n`
    const myURL = url.parse(req.url, true)
    console.log(myURL)
    fs.appendFile('log.txt', log, (err, data)=>{
        res.end("Hello There")
    })
    switch(myURL.pathname){
        case '/' : res.end("Home Page");
        break;
        case '/about' :
            const him = myURL.query.q;
            const her = myURL.query.a;

            res.end(`${him} weds ${her}, Date: 27 December 2027`);
            break;
        default: res.end("404 Not Found")
    }
})

myserver.listen(3000, ()=>{
    console.log("Server is live on localhost:3000")
})