import { Router } from 'express';

import AuthMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();
// Session
routes.post('/session', SessionController.index);

// Users
routes.post('/admin/user/create', UserController.store);
routes.get('/admin/user/list', UserController.index);
routes.post('/admin/user/delete', UserController.destroy);

routes.use(AuthMiddleware);

// Products
routes.post('/user/product/create', ProductController.store);
routes.get('/user/product/list', ProductController.index);
routes.post('/user/product/delete', ProductController.destroy);
routes.post('/user/product/update', ProductController.update);

export default routes;
