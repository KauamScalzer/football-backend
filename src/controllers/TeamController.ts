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
}
