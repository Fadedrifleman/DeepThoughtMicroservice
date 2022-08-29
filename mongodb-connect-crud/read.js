const {dbConnect, objId} = require('./mongodb.js');
//--------------------------------------------------------------------------------------------------------------------------
const getEventById = async (eventId) => {
    const db = await dbConnect();
    const foundObj = await db.find({_id: objId(eventId)}).toArray();
    return foundObj;
};
//--------------------------------------------------------------------------------------------------------------------------
//change pending====>
const getEventByRecency = async (type, limit , page) => {
    const db = await dbConnect();
    const foundObj = await db.find().toArray();
    return foundObj
}
//--------------------------------------------------------------------------------------------------------------------------
module.exports = {
    getEventById,
    getEventByRecency
}; 