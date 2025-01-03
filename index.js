const fs = require('fs')
const path = require('path')

const datafolder = path.join(path.dirname(__filename), "dataFolder");
console.log(datafolder);
if(!fs.existsSync(datafolder)){
    fs.mkdirSync(datafolder);
    console.log("data folder created")
}
console.log("------------------");


const datafile = path.join(datafolder, "hello.txt");
console.log(datafile);

fs.writeFileSync(datafile, "hello from node js");


const data = fs.readFileSync(datafile, 'utf8')
console.log(data)

fs.appendFileSync(datafile, "\nSomething to be added");
console.log(fs.readFileSync(datafile, 'utf8'));


// async way to create file
const asyncDatafile = path.join(datafolder, "async-hello.txt")
console.log(asyncDatafile)

fs.writeFile(asyncDatafile, "Hello There, this is async way to create a file", (err)=>{
    if(err) throw new Error(err)
    console.log("async file is created")
})

const asyncdata = fs.readFile(asyncDatafile, 'utf8', (err, data)=>{
    console.log(data);
})

fs.appendFile(asyncDatafile, "\nThis is also next line in asynchronous way to create new file", (err)=>{
    if(err) throw new Error(err);
    console.log("append done")
    fs.readFile(asyncDatafile, 'utf8', (err, data)=>{
        console.log(data);
    })
})