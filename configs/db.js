/* const mongoose = require('mongoose');

async function getConnection() {
    await mongoose.connect('mongodb://127.0.0.1:27017/comments')
    .then((res) => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));
}
*/

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017/comments';

async function getConnection() {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db('comments');
    return db;
}

module.exports = getConnection;