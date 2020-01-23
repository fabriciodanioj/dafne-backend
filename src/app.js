import 'dotenv/config';

import * as Youch from 'youch';
import express from 'express';
import 'express-async-errors';
import { connect, set } from 'mongoose';
import cors from 'cors';

import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.database();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  database() {
    connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    set('useCreateIndex', true);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
