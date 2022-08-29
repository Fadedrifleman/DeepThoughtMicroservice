const { MongoClient, ObjectId } = require('mongodb');
//--------------------------------------------------------------------------------------------------------------------------
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'dtDB';
//--------------------------------------------------------------------------------------------------------------------------
const dbConnect = async () => {
    const result = await client.connect();
    console.log("DB connected");
    const db = result.db(dbName);
    return db.collection('documents');
}
//--------------------------------------------------------------------------------------------------------------------------
const objId = (id) => {
    var o_id = new ObjectId(id);
    return o_id;
}
//--------------------------------------------------------------------------------------------------------------------------
module.exports = {
    dbConnect, 
    objId
}