import { DataSource } from 'typeorm';
import { City, Team, Championship, TeamChampionship } from './entities';

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: 'pwd_root',
	database: 'football_db',
	synchronize: true,
	logging: false,
	entities: [City, Team, Championship, TeamChampionship],
});
