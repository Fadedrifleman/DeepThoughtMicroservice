const {dbConnect, objId} = require('./mongodb.js');
//--------------------------------------------------------------------------------------------------------------------------
const getEventById = async (eventId) => {
    const db = await dbConnect();
    const foundObj = await db.find({_id: objId(eventId)}).toArray();
    return foundObj;
};
//--------------------------------------------------------------------------------------------------------------------------
const getEventByRecency = async (type, limit , page) => {
    const db = await dbConnect();
    //type = =1 for recent records & type = 1 for older records
    const foundObj = await db.find().sort({$natural: type}).skip(limit * (page-1)).limit(parseInt(limit)).toArray();
    return foundObj
}
//--------------------------------------------------------------------------------------------------------------------------
module.exports = {
    getEventById,
    getEventByRecency
}; 