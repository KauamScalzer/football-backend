import type { Request, Response } from 'express';
import type { TeamChampionshipService } from '../services';

export class TeamChampionshipController {
	constructor(
		private readonly teamChampionshipService: TeamChampionshipService,
	) {}
	async create(req: Request, res: Response): Promise<void> {
		try {
			const { year } = req.body;
			if (!year) {
				res.status(400).send({ error: 'Missing param: year' });
				return;
			}
			const { teamId } = req.body;
			if (!teamId) {
				res.status(400).send({ error: 'Missing param: teamId' });
				return;
			}
			const { championshipId } = req.body;
			if (!championshipId) {
				res.status(400).send({ error: 'Missing param: championshipId' });
				return;
			}
			const result = await this.teamChampionshipService.create({
				year,
				teamId,
				championshipId,
			});
			if (!result) {
				res.status(400).send({ error: 'Invalid param: teamId' });
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
			const { year } = req.body;
			if (!year) {
				res.status(400).send({ error: 'Missing param: year' });
				return;
			}
			const { teamId } = req.body;
			if (!teamId) {
				res.status(400).send({ error: 'Missing param: teamId' });
				return;
			}
			const { championshipId } = req.body;
			if (!championshipId) {
				res.status(400).send({ error: 'Missing param: championshipId' });
				return;
			}
			const id = Number.parseInt(req.params.id);
			await this.teamChampionshipService.update({
				id,
				year,
				teamId,
				championshipId,
			});
			res.status(204).send();
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Internal Server Error' });
		}
	}

	async getAll(_req: Request, res: Response): Promise<void> {
		try {
			const result = await this.teamChampionshipService.getAll();
			res.status(200).send(result);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Internal Server Error' });
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		try {
			const id = Number.parseInt(req.params.id);
			await this.teamChampionshipService.delete(id);
			res.status(204).send();
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Internal Server Error' });
		}
	}
}
