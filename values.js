function values(obj) {
    try{
        let values = [];
        for(let key in obj){
            values.push(obj[key]);
        }
        return values;
    } catch (error){
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.values = values;