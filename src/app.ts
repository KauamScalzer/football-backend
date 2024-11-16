import express, { type Application } from 'express';
import cityRoutes from './routes/CityRoutes';
import teamRoutes from './routes/TeamRoutes';

const app: Application = express();

app.use(express.json());
app.use('/city', cityRoutes);
app.use('/team', teamRoutes);

export default app;
