import http, { IncomingMessage, Server, ServerResponse } from 'http';

const hostname: string = '127.0.0.1';
const port: number = 5000;

const server: Server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');

  //post
  if (request.url === '/login' && request.method === 'POST') {
    let body: any = '';
    request
      .on('data', (chuck) => {
        body += chuck;
      })
      .on('end', () => {
        let formData = JSON.parse(body);
        if (formData.name === 'khang' && formData.password === 'admin') {
          response.end(`<h3 style="color:green">login is success</h3>`);
        } else {
          response.end(`<h3 style="color:red">invalid</h3>`);
        }
      });
  }
  //   response.end(`<h2>welcome to  Node js Server </h2>`);
});

server.listen(port, hostname, () => {
  console.log(`node js Server is start at http://${hostname}:${port}`);
});
