/* const express = require('express');

const app = express();

const morgan = require('morgan');
const helmet = require('helmet');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/comments')
    .then((res) => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://127.0.0.1:27017/mydb";

const mongoClient = new MongoClient(url);
 
const users = [{name: "Bob", age: 3544} , {name: "Alice", age: 221}, {name: "Tom", age: 45}];
 
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
run().catch(console.error); */

/* 111111111111111mongoose
  .connect(mydb)
  .then((res)=> console.log('Connect to DB'))
  .catch((error)=>console.log('error'));111111111111111 */


/* app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(helmet());

const PORT = 3000;
const host='127.0.0.1';

app.use('/api', require('./api'));

app.use(express.static('public'));

app.listen(PORT,host,(error)=>{
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});

app.use((req,res) => {
    res
        .status(400)
        .send('Error 400');
});
 */

const express = require('express');
const app = express();
const commentsRouter = require('./routes/comments');

app.use(express.json());
app.use('/comments', commentsRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});