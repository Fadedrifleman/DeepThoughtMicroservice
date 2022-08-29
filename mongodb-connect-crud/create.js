const {dbConnect} = require('./mongodb.js');
//--------------------------------------------------------------------------------------------------------------------------
//change pending====>
const addEventToDb = async (obj) => {
    const db = await dbConnect();
    const result = await db.insertOne({name: obj.name})
    if(result.acknowledged) {
        return result.insertedId;
    }
    return false;
}
//--------------------------------------------------------------------------------------------------------------------------
module.exports = {
    addEventToDb
}; 