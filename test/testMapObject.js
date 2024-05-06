const data = require("./data.js");
const fn = require("./../mapObject.js");

const result = fn.mapObject(data.testObject, (value) => {
    return value*2;
});

console.log(result);