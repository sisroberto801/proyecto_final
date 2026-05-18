import express from 'express';
import morgan from 'morgan';
import cvRoutes from './routes/cv.route.js';
import {swaggerDocs} from './config/swagger.js';
import env from './config/env.js';

const app = express();

app.use(morgan('combined'));
app.use(express.json());

app.use('/cv', cvRoutes)

swaggerDocs(app, env.db_port);
export default app;
