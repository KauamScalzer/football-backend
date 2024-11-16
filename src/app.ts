import express, { type Application } from 'express';
import cityRoutes from './routes/CityRoutes';

const app: Application = express();

app.use(express.json());
app.use('/city', cityRoutes);

export default app;
