import type { City } from '../database/entities';
import type { CityDto } from '../dtos/CityDto';
import type { CityRepository } from '../repositories';

export class CityService {
	constructor(private readonly cityRepository: CityRepository) {}
	async create(name: string): Promise<City> {
		return await this.cityRepository.create(name);
	}

	async update(params: CityDto): Promise<void> {
		await this.cityRepository.update(params);
	}

	async getAll(): Promise<City[]> {
		return await this.cityRepository.getAll();
	}

	async delete(id: number): Promise<void> {
		await this.cityRepository.delete(id);
	}
}
