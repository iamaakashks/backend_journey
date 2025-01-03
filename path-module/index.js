const path = require('path');

console.log("directory name: ", path.dirname(__filename));
console.log("file name: ", path.basename(__filename));
console.log("file extension: ", path.extname(__filename));


console.log("joined path: ", path.join(path.dirname(__filename), path.basename(__filename)))
console.log("resolv path: ", path.resolve(path.dirname(__filename), path.basename(__filename)))
console.log("parsed path: ", path.parse(path.join(path.dirname(__filename), path.basename(__filename))));