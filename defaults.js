function defaults(obj, defaultProps) {
    try{
        for(let key in defaultProps){
            if(!obj[key]){
                obj[key] = defaultProps[key];
            }
        }
        return obj;
    } catch (error){
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.defaults = defaults;