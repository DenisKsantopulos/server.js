var express = require('express');
var router = express.Router();
 

const apiurl = (req, res, next) => {
  const apiKey = req.query.api_key;

  if (!apiKey || apiKey !== 'my_api_key') {
    return res.status(403).send( 'Error 403' );
  }

  next();
};

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


function validateComment(req, res,next) {
  const { name } = req.body;

  if (!name || name.trim() === '') {
    return res.status(400).send('Comment cannot be empty');
  }
  
  req.body.comment = name; // Записываем отредактированный комментарий в объект запроса
  next();
  
}

// обработчик post-запроса на /comments
router.post('/comments',validateComment, (req, res) => {
  const name = req.body.comment;
  
  comments.push(name);
  
  res.json(comments);
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





router.use(apiurl);

module.exports = router;