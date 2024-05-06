function invert(obj) {
    try{
        let result = {}
        for(let key in obj){
            result[obj[key]] = key;
        }
        return result;
    } catch (error){
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.invert = invert;