import express from 'express';
import routes from './routes/homeRoutes';

const app = express();

// Middlewares
app.use(express.json());
app.use(routes);

// Servidor
app.listen(8000, () => {
	console.log('rodando');
});
