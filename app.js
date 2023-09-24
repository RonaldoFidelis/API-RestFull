import express from 'express';
import routerHome from './src/routes/homeRouter';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.route();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  route() {
    this.app.use(routerHome)
  }
}

export default new App().app;
