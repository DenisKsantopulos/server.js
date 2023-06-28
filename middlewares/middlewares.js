const checkApiKey = (req, res, next) => {
    const apiKey = req.query.api_key;
  
    if (!apiKey || apiKey !== '1111') {
      return res.status(403).send( '403 Forbidden' );
    }

    next();
};


module.exports ={
    checkApiKey: checkApiKey
};

const stats = {};

function getStats(req, res, next) {
    let agent = req.headers['user-agent'];

    if (agent)
        stats[agent] = (stats[agent] || 0) + 1;

        let html = '<table border="1"><thead><tr><th>User-Agent</th><th>Requests</th></tr></thead><tbody>';
        for(let key in stats)
            html += `<tr><td>${key}</td><td>${stats[key]}</td></tr>`;

        html += '</tbody></table>';
        res.send(html);
}
    
module.exports = getStats;

let comments = [];
let comm = {};

function sendComment(req, res, next){
    const { name, comment } = req.body;

    comm.name = name;
    comm.comment = comment;

    comments.push(comm);

    res.json(comments);

  next();
}

function validateComment(req, res,next) {
    const { name, comment } = req.body;
  
    if (!name || name.trim() === '' || !comment || comment.trim() === '') {
      return res.status(400).send('Comment cannot be empty');
    }

    next();
}

module.exports = {
  sendComment,
  validateComment
};