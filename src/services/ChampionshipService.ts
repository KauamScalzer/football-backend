import type { Championship } from '../database/entities';
import type { ChampionshipDto } from '../dtos';
import type { ChampionshipRepository } from '../repositories';

export class ChampionshipService {
	constructor(
		private readonly championshipRepository: ChampionshipRepository,
	) {}
	async create(name: string): Promise<Championship> {
		return await this.championshipRepository.create(name);
	}

	async update(params: ChampionshipDto): Promise<void> {
		await this.championshipRepository.update(params);
	}

	async getAll(): Promise<Championship[]> {
		return await this.championshipRepository.getAll();
	}

	async delete(id: number): Promise<void> {
		await this.championshipRepository.delete(id);
	}
}
