import type { Request, Response } from 'express';
import type { TeamService } from '../services';

export class TeamController {
	constructor(private readonly teamService: TeamService) {}
	async create(req: Request, res: Response): Promise<void> {
		try {
			const { name } = req.body;
			if (!name) {
				res.status(400).send({ error: 'Missing param: name' });
				return;
			}
			const { cityId } = req.body;
			if (!cityId) {
				res.status(400).send({ error: 'Missing param: cityId' });
				return;
			}
			const { foundationYear } = req.body;
			if (!foundationYear) {
				res.status(400).send({ error: 'Missing param: foundationYear' });
				return;
			}
			const result = await this.teamService.create({
				name,
				cityId,
				foundationYear,
			});
			if (!result) {
				res.status(400).send({ error: 'Invalid param: cityId' });
				return;
			}
			res.status(201).send(result);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Internal Server Error' });
		}
	}

	async update(req: Request, res: Response): Promise<void> {
		try {
			const { name } = req.body;
			if (!name) {
				res.status(400).send({ error: 'Missing param: name' });
				return;
			}
			const { cityId } = req.body;
			if (!cityId) {
				res.status(400).send({ error: 'Missing param: cityId' });
				return;
			}
			const { foundationYear } = req.body;
			if (!foundationYear) {
				res.status(400).send({ error: 'Missing param: foundationYear' });
				return;
			}
			const id = Number.parseInt(req.params.id);
			const result = await this.teamService.update({
				id,
				name,
				cityId,
				foundationYear,
			});
			if (!result) {
				res.status(400).send({ error: 'Invalid param: cityId' });
				return;
			}
			res.status(204).send();
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Internal Server Error' });
		}
	}

	async getAll(_req: Request, res: Response): Promise<void> {
		try {
			const result = await this.teamService.getAll();
			res.status(200).send(result);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Internal Server Error' });
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		try {
			const id = Number.parseInt(req.params.id);
			await this.teamService.delete(id);
			res.status(204).send();
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Internal Server Error' });
		}
	}
}
