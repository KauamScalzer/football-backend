import { DataSource } from 'typeorm';
import { City, Team, Championship, TeamChampionship } from './entities';
import { config } from 'dotenv';

config();

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: false,
	entities: [City, Team, Championship, TeamChampionship],
});
