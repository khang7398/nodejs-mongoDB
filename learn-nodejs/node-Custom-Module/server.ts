import http, { IncomingMessage, Server, ServerResponse } from 'http';
import { MathUtil } from './util/MathUtil';
import { StringUtil } from './util/StringUtil';

const hostname: string = '127.0.0.1';
const port: number = 5000;

const server: Server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');

  // string util
  let customerName: string = 'khang';
  let length = StringUtil.printLength(customerName);

  let channelName: string = 'easy forntend';
  let result: string = StringUtil.printTriangle(channelName);

  // math util
  let theNumber: number = 72;
  let resultMath: string = MathUtil.printMathTable(theNumber);

  response.end(`<pre>${resultMath}<pre>`);
});

server.listen(port, hostname, () => {
  console.log(`node js Server is start at http://${hostname}:${port}`);
});
