function mapObject(obj, cb) {
    try{
        let mappedObj = {}
        for(let key in obj){
            let result = cb(obj[key]);
            if(result != undefined){
                mappedObj[key] = result;
            }
        }
        return mappedObj;
    } catch (error){
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.mapObject = mapObject;