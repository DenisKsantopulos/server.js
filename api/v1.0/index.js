var express = require('express');
var router = express.Router();
 
router.get('/', function(req, res, next) {
  mainpage(req, res);
});
 
router.post('/', function(req, res, next) {
  mainpage(req, res);
});
 


const stats = {};
let k=0;

const bodyParser = require('body-parser');

// глобальная переменная для хранения комментариев
let comments = [];

// middleware для парсинга тела запроса в формате json
router.use(bodyParser.json());

// обработчик post-запроса на /comments
router.post('/comments', (req, res) => {
  comm(req, res)
});

router.get('/stats', (req,res) =>{
  statistics(req, res)
});



function mainpage(req, res) {
    res.send('Hello v1.0 GET API');
}

function statistics(req, res) {
        const userAgent = req.headers['user-agent'];
        if (userAgent) {
          stats[userAgent] = (stats[userAgent] || 0) + 1;
        }
        k++;
        let html = '<table><thead><tr><th>User-Agent</th><th>Requests</th></tr></thead><tbody>';
        html += `<tr><td>${userAgent}</td><td>${k}</td></tr>`;
        html += '</tbody></table>';
    
        res.send(html);
}

function comm(req, res) {
  const { text } = req.body;
  comments.push(text);
  res.json(comments);
}

module.exports = router;