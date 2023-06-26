const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/mydb';

const mongoClient = new MongoClient(url);
 
const users = [{name: "Bob", age: 35} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
 
async function run() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("mydb");
        const collection = db.collection("users");
        const results = await collection.insertMany(users);
        console.log(results);
        console.log(users);
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.error);

async function getDatabase() {
  const client = await MongoClient.connect(uri, { useNewUrlParser: true });
  return client.db('mydb');
}


module.exports = getDatabase;