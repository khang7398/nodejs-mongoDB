import http, { IncomingMessage, Server, ServerResponse } from 'http';
import { AipRouter } from './router/apiRouter';

const hostname: string = '127.0.0.1';
const port: number = 5000;

const server: Server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');

  AipRouter.mapRouters(request, response);
});

server.listen(port, hostname, () => {
  console.log(`node js Server is start at http://${hostname}:${port}`);
});
