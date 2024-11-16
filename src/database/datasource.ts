import { DataSource } from 'typeorm';
import { City, Team, Championship } from './entities';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'root',
	password: 'pwd_root',
	database: 'football_db',
	synchronize: true,
	logging: false,
	entities: [City, Team, Championship],
});
