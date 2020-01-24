import { Router } from 'express';

import AuthMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SessionController';
import DayBalanceController from './app/controllers/DayBalanceController';
import OrderController from './app/controllers/OrderController';

const routes = new Router();
// Session
routes.post('/session', SessionController.index);

// Users
routes.post('/admin/user/create', UserController.store);
routes.get('/admin/user/list', UserController.index);
routes.delete('/admin/user/delete', UserController.destroy);

routes.use(AuthMiddleware);

// Products
routes.post('/user/product/create', ProductController.store);
routes.get('/user/product/list', ProductController.index);
routes.get('/user/product/search', ProductController.show);
routes.delete('/user/product/delete', ProductController.destroy);
routes.put('/user/product/update', ProductController.update);

// DayBalance
routes.post('/user/day/create', DayBalanceController.store);
routes.get('/user/day/show', DayBalanceController.index);
routes.get('/user/day/show/range', DayBalanceController.show);
routes.get('/user/day/show/all', DayBalanceController.showAll);

// Order
routes.post('/user/order/create', OrderController.store);
routes.get('/user/order/show', OrderController.show);

export default routes;
