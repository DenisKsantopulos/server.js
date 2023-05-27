const express = require('express');

const app = express();

const morgan = require('morgan');
const helmet = require('helmet');

const PORT = 3000;
const host='127.0.0.1';

const bodyParser = require('body-parser');


function validateInput(req, res, next) {
  const { input } = req.body;
  if (!input) {
    return res.status(400).json({ error: 'Input is required' });
  }
  next();
}

function authenticateApiKey(req, res, next) {
  const apiKey = req.query.apiKey;
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

function notFound(req, res, next) {
  res.status(404).json({ error: 'Not found' });
}


// глобальная переменная для хранения комментариев
let comments = [];

// middleware для парсинга тела запроса в формате json
app.use(bodyParser.json());

// обработчик post-запроса на /comments
app.post('/comments', (req, res) => {
  const { text } = req.body;
  comments.push(text);
  res.json(comments);
});


const stats = {};
let k=0;
const data = JSON.stringify([
  {
      "//first_comment":  "The first JSON comment.",
      "//second_comment": "The second JSON comment."
  }
]) 
let parrse = JSON.parse(data);

app.listen(PORT,host,(error)=>{
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
});

app.use('/api', require('./api'));

app.use(express.static('public'));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(helmet());



app.get('/', (req,res) =>{
    res.send('Hello world');
});

app.get('/stats', (req,res) =>{
        const userAgent = req.headers['user-agent'];
        if (userAgent) {
          stats[userAgent] = (stats[userAgent] || 0) + 1;
        }
        k++;
        let html = '<table><thead><tr><th>User-Agent</th><th>Requests</th></tr></thead><tbody>';
        html += `<tr><td>${userAgent}</td><td>${k}</td></tr>`;
        html += '</tbody></table>';
    
        res.send(html);
});

/* app.post('/comments', (req,res) =>{
        res.setHeader('Content-Type','application/json')
        let body = '';


        req.on('data', (chunk) => {
          body += chunk.toString();
        });
    
        req.on('send', () => {
          const comment = JSON.parse(body);
          console.log('New comment:', comment);
          parrse.push(comment);
          let dd = JSON.stringify(parrse);
          res.send(dd);
        });
});
 */
app.use((req,res) => {
    res
        .status(404)
        .send('Error');
});
