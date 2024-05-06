function keys(obj){
    try{
        let keys = []
        for(let key in obj){
            keys.push(key);
        }
        return keys;
    } catch (error){
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.keys = keys;