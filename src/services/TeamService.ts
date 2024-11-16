import type { Team } from '../database/entities';
import type { TeamDto, CreateTeamDto } from '../dtos';
import type { TeamRepository } from '../repositories';

export class TeamService {
	constructor(private readonly teamRepository: TeamRepository) {}
	async create(params: CreateTeamDto): Promise<Team> {
		return await this.teamRepository.create(params);
	}

	async update(params: TeamDto): Promise<void> {
		await this.teamRepository.update(params);
	}

	async getAll(): Promise<Team[]> {
		return await this.teamRepository.getAll();
	}

	async delete(id: number): Promise<void> {
		await this.teamRepository.delete(id);
	}
}
