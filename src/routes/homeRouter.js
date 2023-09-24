import express from 'express';
import {modules} from '../controllers/homeController';
const home = express.Router();

home.get('/',modules.get);

export default home;
