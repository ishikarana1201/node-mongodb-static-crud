// 1.Import
const {MongoClient} = require('mongodb');
// 2.DB initialization
const databaseName = 'e-comm';
// 3.DB URL
const url = "mongodb://localhost:27017";
//4.connect mongodb
const client = new MongoClient(url);

async function dbConnect(){
    // Connection
    let result = await client.connect();
    // Connection with db
    let db = result.db(databaseName);
    // get collection to connect
    return db.collection('products');
    // Get response
   
}

module.exports=dbConnect;