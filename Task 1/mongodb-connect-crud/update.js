const {dbConnect, objId} = require('./mongodb.js');
//--------------------------------------------------------------------------------------------------------------------------
const updateEventById = async (id , obj) => {
    const db = await dbConnect();
    const result = await db.updateOne({_id: objId(id)}, {$set: obj});
    return result.acknowledged;
}
//--------------------------------------------------------------------------------------------------------------------------
module.exports = {
    updateEventById
};