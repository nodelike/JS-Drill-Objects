const data = require("./data.js");
const fn = require("./../defaults.js");

const result = fn.defaults(data.testObject, {designation: "Python developer"});
console.log(result);