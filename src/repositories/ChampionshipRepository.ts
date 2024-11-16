import { Championship } from '../database/entities';
import { AppDataSource } from '../database/datasource';
import type { ChampionshipDto } from '../dtos';

export class ChampionshipRepository {
	async create(name: string): Promise<Championship> {
		const repository = AppDataSource.getRepository(Championship);
		return await repository.save({ name: name });
	}

	async update(params: ChampionshipDto): Promise<void> {
		const repository = AppDataSource.getRepository(Championship);
		await repository.update(params.id, { name: params.name });
	}

	async getAll(): Promise<Championship[]> {
		const repository = AppDataSource.getRepository(Championship);
		return await repository.find();
	}

	async delete(id: number): Promise<void> {
		const repository = AppDataSource.getRepository(Championship);
		await repository.delete(id);
	}

	async checkOne(id: number): Promise<boolean> {
		const repository = AppDataSource.getRepository(Championship);
		return await repository.exists({ where: { id } });
	}
}
