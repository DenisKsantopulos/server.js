const express = require('express');

const app = express();

const morgan = require('morgan');
const helmet = require('helmet');

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
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
        .send('Error');
});
