import { Team } from '../database/entities';
import { AppDataSource } from '../database/datasource';
import type { CreateTeamDto, TeamDto } from '../dtos';

export class TeamRepository {
	async create(params: CreateTeamDto): Promise<Team> {
		const repository = AppDataSource.getRepository(Team);
		return await repository.save(params);
	}

	async update(params: TeamDto): Promise<void> {
		const repository = AppDataSource.getRepository(Team);
		await repository.update(params.id, { ...params });
	}

	async getAll(): Promise<Team[]> {
		const repository = AppDataSource.getRepository(Team);
		return await repository.find();
	}

	async delete(id: number): Promise<void> {
		const repository = AppDataSource.getRepository(Team);
		await repository.delete(id);
	}
}
