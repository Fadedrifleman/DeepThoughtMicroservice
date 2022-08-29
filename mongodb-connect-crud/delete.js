const {dbConnect, objId} = require('./mongodb.js');
//--------------------------------------------------------------------------------------------------------------------------
const deleteEventFromDb = async (id) => {
    const db = await dbConnect();
    const result = await db.deleteOne({_id: objId(id)});
    return result.acknowledged;
}
//--------------------------------------------------------------------------------------------------------------------------
module.exports = {
    deleteEventFromDb
};