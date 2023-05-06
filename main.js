const http = require('http');

const PORT = 3000;
const host='127.0.0.1';

let k=0;
const stats = {};

const server = http.createServer((req,res)=>{
    console.log('Server request');   
    console.log(`listening port ${PORT}`);
    console.log(req.url, req.method); 
    if (req.method=='GET' && req.url === '/'){
      
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
    
        res.end(html);
    }
    if (req.method=='POST' && req.url === '/comments'){
        //POST
        res.setHeader('Content-Type','application/json')
        let body = '';

        req.on('data', (chunk) => {
          body += chunk.toString();
        });
    
        req.on('end', () => {
          const comment = JSON.parse(body);
          console.log('New comment:', comment);
          res.end('Comment added successfully');
        });
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

server.listen(PORT,host,(error)=>{
    error ? console.log(error) : console.log('New request');
})