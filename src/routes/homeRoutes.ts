import { Router } from 'express';
const routes = Router();

routes.get('/', (req, res) => {
	res.json({ msg: 'Seja bem vindo' });
});

export default routes;
