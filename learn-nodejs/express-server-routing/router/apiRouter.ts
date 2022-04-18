import express from 'express';

const apiRouter: express.Router = express.Router();

apiRouter.get('/', (request: express.Request, response: express.Response) => {
  response.status(200).send(`<h3>hello Api Router</h3>`);
});
apiRouter.get('/test', (request: express.Request, response: express.Response) => {
  response.status(200).send(`<h3>hello test path</h3>`);
});

export default apiRouter;
