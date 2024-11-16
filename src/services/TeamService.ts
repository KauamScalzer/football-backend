import type { Team } from '../database/entities';
import type { TeamDto, CreateTeamDto } from '../dtos';
import type { CityRepository, TeamRepository } from '../repositories';

export class TeamService {
	constructor(
		private readonly teamRepository: TeamRepository,
		private readonly cityRepository: CityRepository,
	) {}
	async create(params: CreateTeamDto): Promise<Team> {
		const cityExists = await this.cityRepository.checkOne(params.cityId);
		if (!cityExists) {
			return;
		}
		return await this.teamRepository.create(params);
	}

	async update(params: TeamDto): Promise<boolean> {
		const cityExists = await this.cityRepository.checkOne(params.cityId);
		if (!cityExists) {
			return false;
		}
		await this.teamRepository.update(params);
		return true;
	}

	async getAll(): Promise<Team[]> {
		return await this.teamRepository.getAll();
	}

	async delete(id: number): Promise<void> {
		await this.teamRepository.delete(id);
	}
}
