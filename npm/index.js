const lodash = require("lodash");

const names = ["aakash", "nagashreya", "ankit", "sakshi"];
const capitalize = lodash.map(names, lodash.capitalize);
console.log(capitalize);