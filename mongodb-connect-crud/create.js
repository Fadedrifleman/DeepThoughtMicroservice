const {dbConnect} = require('./mongodb.js');
//--------------------------------------------------------------------------------------------------------------------------
const addEventToDb = async (obj) => {
    const db = await dbConnect();
    const result = await db.insertOne(obj);
    if(result.acknowledged) {
        return result.insertedId;
    }
    return false;
}
//--------------------------------------------------------------------------------------------------------------------------
module.exports = {
    addEventToDb
}; 