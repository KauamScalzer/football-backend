import { City } from '../database/entities';
import { AppDataSource } from '../database/datasource';
import type { CityDto } from '../dtos/CityDto';

export class CityRepository {
	async create(name: string): Promise<City> {
		const repository = AppDataSource.getRepository(City);
		return await repository.save({ name: name });
	}

	async update(params: CityDto): Promise<void> {
		const repository = AppDataSource.getRepository(City);
		await repository.update(params.id, { name: params.name });
	}

	async getAll(): Promise<City[]> {
		const repository = AppDataSource.getRepository(City);
		return await repository.find();
	}

	async delete(id: number): Promise<void> {
		const repository = AppDataSource.getRepository(City);
		await repository.delete(id);
	}
}
