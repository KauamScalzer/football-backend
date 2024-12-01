import type { TeamChampionship } from '../database/entities';
import type { TeamChampionshipDto, CreateTeamChampionshipDto } from '../dtos';
import type { TeamChampionshipRepository } from '../repositories';

export class TeamChampionshipService {
	constructor(
		private readonly teamChampionshipRepository: TeamChampionshipRepository,
	) {}
	async create(params: CreateTeamChampionshipDto): Promise<TeamChampionship> {
		return await this.teamChampionshipRepository.create(params);
	}

	async update(params: TeamChampionshipDto): Promise<void> {
		await this.teamChampionshipRepository.update(params);
	}

	async getAll(championshipId: number): Promise<TeamChampionship[]> {
		return await this.teamChampionshipRepository.getAll(championshipId);
	}

	async delete(id: number): Promise<void> {
		await this.teamChampionshipRepository.delete(id);
	}
}
