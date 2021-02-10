import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Express TypeScript Boilerplate'});
});

export default routes;