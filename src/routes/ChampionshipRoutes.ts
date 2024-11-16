import { Router } from 'express';
import { ChampionshipController } from '../controllers';
import { ChampionshipService } from '../services';
import { ChampionshipRepository } from '../repositories';

const router = Router();

const championshipRepository = new ChampionshipRepository();
const championshipService = new ChampionshipService(championshipRepository);
const championshipController = new ChampionshipController(championshipService);

router.post('/', championshipController.create.bind(championshipController));
router.put('/:id', championshipController.update.bind(championshipController));
router.get('/', championshipController.getAll.bind(championshipController));
router.delete(
	'/:id',
	championshipController.delete.bind(championshipController),
);

export default router;
