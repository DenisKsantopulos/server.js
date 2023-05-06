const http = require('http');

const PORT = 3000;
const host='127.0.0.1';

/* const express = require('express');
const app = express();
const stats = {};  
app.use(express.json());
app.use((req, res, next) => {
    const userAgent = req.headers['user-agent'];
    if (userAgent) {
      stats[userAgent] = (stats[userAgent] || 0) + 1;
    }
    next();
  }); */
  

let k=0;
const stats = {};
/* let userAgent=1; */
const server = http.createServer((req,res)=>{
    console.log('Server request');   
    console.log(`listening port ${PORT}`);
    console.log(req.url, req.method); 
    if (req.method=='GET' && req.url === '/'){
      /* console.log(req.method); */
      res.write('Hello world!');

      res.end();
  }  
    if (req.method=='GET' && req.url === '/stats'){
        const userAgent = req.headers['user-agent'];
        if (userAgent) {
          stats[userAgent] = (stats[userAgent] || 0) + 1;
        }
        k++;
        let html = '<table><thead><tr><th>User-Agent</th><th>Requests</th></tr></thead><tbody>';
        for (let i=0;i<=0;i++) {
            html += `<tr><td>${userAgent}</td><td>${k}</td></tr>`;
        }
        html += '</tbody></table>';
        /* res.send(html); */
        res.end(html);
    }
    if (req.method=='POST' && req.url === '/comments'){
        //POST
        res.setHeader('Content-Type','application/json')
        const data = JSON.stringify([
        {
            "//first_comment":  "The first JSON comment.",
            "//second_comment": "The second JSON comment."
        }
    ]) 
    
    res.end(data);
    }
    if (req.method!='POST' && req.method!='GET'){
      console.log('Error 404');
    }
})

/* app.post("/", urlencodedParser, function (request, response) {
    
    const data = JSON.stringify([
        {
            "//first_comment":  "The first JSON comment.",
            "//second_comment": "The second JSON comment."
        }
    ])
    response.send(data);
}); */

/* req.on('error', (err) => {
    // This prints the error message and stack trace to `stderr`.
    console.error(err.stack);
  }); */

server.listen(PORT,host,(error)=>{
    
    error ? console.log(error) : console.log('New request');
})