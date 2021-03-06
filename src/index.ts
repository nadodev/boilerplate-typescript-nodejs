import express, { NextFunction, Request, Response } from 'express';
import AppError from './shared/errors/AppError';
import routes from './shared/routes/homeRoutes';

const app = express();

// Middlewares
app.use(express.json());
app.use(routes);
app.use(
	(error: Error, request: Request, response: Response, next: NextFunction) => {
		if (error instanceof AppError) {
			return response.status(error.statusCode).json({
				status: 'error',
				message: error.message,
			});
		}
		return response.status(500).json({
			status: 'error',
			message: 'Internal Server Error',
		});
	},
);
// Servidor
app.listen(8000, () => {
	console.log('rodando');
});
