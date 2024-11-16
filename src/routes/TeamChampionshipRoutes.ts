import { Router } from 'express';
import { TeamChampionshipController } from '../controllers';
import { TeamChampionshipService } from '../services';
import { TeamChampionshipRepository } from '../repositories';

const router = Router();

const teamChampionshipRepository = new TeamChampionshipRepository();
const teamChampionshipService = new TeamChampionshipService(
	teamChampionshipRepository,
);
const teamChampionshipController = new TeamChampionshipController(
	teamChampionshipService,
);

router.post(
	'/',
	teamChampionshipController.create.bind(teamChampionshipController),
);
router.get(
	'/',
	teamChampionshipController.getAll.bind(teamChampionshipController),
);
router.delete(
	'/:id',
	teamChampionshipController.delete.bind(teamChampionshipController),
);
router.put(
	'/:id',
	teamChampionshipController.update.bind(teamChampionshipController),
);

export default router;
