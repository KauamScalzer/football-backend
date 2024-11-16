import type { Request, Response } from 'express';
import type { CityService } from '../services';

export class CityController {
	constructor(private readonly cityService: CityService) {}
	async create(req: Request, res: Response): Promise<void> {
		try {
			const { name } = req.body;
			if (!name) {
				res.status(400).send({ error: 'Missing param: name' });
				return;
			}
			const result = await this.cityService.create(name);
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
			const result = await this.cityService.update({ name, id });
			res.status(204).send(result);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Internal Server Error' });
		}
	}

	async getAll(_req: Request, res: Response): Promise<void> {
		try {
			const result = await this.cityService.getAll();
			res.status(200).send(result);
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Internal Server Error' });
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		try {
			const id = Number.parseInt(req.params.id);
			await this.cityService.delete(id);
			res.status(204).send();
		} catch (error) {
			console.log(error);
			res.status(500).send({ error: 'Internal Server Error' });
		}
	}
}
