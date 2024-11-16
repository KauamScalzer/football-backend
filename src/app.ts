import express, { type Application } from 'express';
import cityRoutes from './routes/CityRoutes';
import teamRoutes from './routes/TeamRoutes';
import championshipRoutes from './routes/ChampionshipRoutes';
import teamChampionshipRoutes from './routes/TeamChampionshipRoutes';

const app: Application = express();

app.use(express.json());
app.use('/city', cityRoutes);
app.use('/team', teamRoutes);
app.use('/championship', championshipRoutes);
app.use('/team-championship', teamChampionshipRoutes);

export default app;
