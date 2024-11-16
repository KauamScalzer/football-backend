import { TeamChampionship } from '../database/entities';
import { AppDataSource } from '../database/datasource';
import type { CreateTeamChampionshipDto, TeamChampionshipDto } from '../dtos';

export class TeamChampionshipRepository {
	async create(params: CreateTeamChampionshipDto): Promise<TeamChampionship> {
		const repository = AppDataSource.getRepository(TeamChampionship);
		return await repository.save(params);
	}

	async update(params: TeamChampionshipDto): Promise<void> {
		const repository = AppDataSource.getRepository(TeamChampionship);
		await repository.update(params.id, { ...params });
	}

	async getAll(): Promise<TeamChampionship[]> {
		const repository = AppDataSource.getRepository(TeamChampionship);
		return await repository.find();
	}

	async delete(id: number): Promise<void> {
		const repository = AppDataSource.getRepository(TeamChampionship);
		await repository.delete(id);
	}

	async checkOne(id: number): Promise<boolean> {
		const repository = AppDataSource.getRepository(TeamChampionship);
		return await repository.exists({ where: { id } });
	}
}
