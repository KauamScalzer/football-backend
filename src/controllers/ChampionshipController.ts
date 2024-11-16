import type { Request, Response } from 'express';
import type { ChampionshipService } from '../services';

export class ChampionshipController {
	constructor(private readonly championshipService: ChampionshipService) {}
	async create(req: Request, res: Response): Promise<void> {
		try {
			const { name } = req.body;
			if (!name) {
				res.status(400).send({ error: 'Missing param: name' });
				return;
			}
			const result = await this.championshipService.create(name);
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
			const id = Number.parseInt(req.params.id);
			const result = await this.championshipService.update({ name, id });
			res.status(204).send(result);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Internal Server Error' });
		}
	}

	async getAll(_req: Request, res: Response): Promise<void> {
		try {
			const result = await this.championshipService.getAll();
			res.status(200).send(result);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Internal Server Error' });
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		try {
			const id = Number.parseInt(req.params.id);
			await this.championshipService.delete(id);
			res.status(204).send();
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Internal Server Error' });
		}
	}
}
