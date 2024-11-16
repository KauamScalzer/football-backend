import 'reflect-metadata';
import app from './app';
import { AppDataSource } from './database/datasource';

const PORT = 3000;

AppDataSource.initialize().then(() => {
	app.listen(PORT, () => {
		console.log(`Server running on http://localhost:${PORT}`);
	});
});
