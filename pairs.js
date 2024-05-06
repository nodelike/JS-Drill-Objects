function pairs(obj) {
    try{
        let pairs = []
        for(let key in obj){
            pairs.push([key, obj[key]])
        }
        return pairs;
    } catch (error){
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.pairs = pairs;