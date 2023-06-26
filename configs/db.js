const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/mydb';

async function connectDB() {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  const db = client.db('mydb');
  return db;
}

module.exports = connectDB;