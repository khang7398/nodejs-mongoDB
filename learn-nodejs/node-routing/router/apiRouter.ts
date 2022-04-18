import http from 'http';

export class AipRouter {
  public static mapRouters(request: http.IncomingMessage, response: http.ServerResponse) {
    let url: string | undefined = request.url;
    let method: string | undefined = request.method;
    let result: string = '';

    if (url === '/' && method === 'GET') {
      result = `<h2>welcome to  Node js Server </h2>`;
    } else if (url === '/about' && method === 'GET') {
      result = `<h2>welcome to  about page </h2>`;
    } else if (url === '/service' && method === 'GET') {
      result = `<h2>welcome to  service page </h2>`;
    } else if (url === '/contact' && method === 'GET') {
      result = `<h2>welcome to  contact page </h2>`;
    } else {
      result = `<h2>404 Page not Found....</h2>`;
    }
  }
}
