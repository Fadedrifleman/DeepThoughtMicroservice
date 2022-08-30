const {dbConnect, objId} = require('./mongodb.js');
//--------------------------------------------------------------------------------------------------------------------------
const addEventToDb = async (obj, img) => {
    const db = await dbConnect();
    if (img) {
        obj.files = img.path;
    }
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