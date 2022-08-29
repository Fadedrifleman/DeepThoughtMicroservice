const {dbConnect, objId} = require('./mongodb.js');
//--------------------------------------------------------------------------------------------------------------------------
//change pending====>
const updateEventById = async (id , obj) => {
    const db = await dbConnect();
    const result = await db.updateOne({_id: objId(id)}, {$set: {name: obj.name}});
    return result.acknowledged;

}
//--------------------------------------------------------------------------------------------------------------------------
module.exports = {
    updateEventById
};