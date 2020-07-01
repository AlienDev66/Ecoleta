import express from 'express';
import PointsControllers from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsControllers();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points/:id', pointsController.show );
routes.get('/points', pointsController.index );


routes.post('/points', pointsController.create );

export default routes;