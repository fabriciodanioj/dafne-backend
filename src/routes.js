import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';

const routes = new Router();

// Users
routes.post('/admin/user/create', UserController.store);
routes.get('/admin/user/list', UserController.index);
routes.post('/admin/user/delete', UserController.destroy);

// Products
routes.post('/user/product/create', ProductController.store);
routes.get('/user/product/list', ProductController.index);
routes.post('/user/product/delete', ProductController.destroy);
routes.post('/user/product/update', ProductController.update);

export default routes;
