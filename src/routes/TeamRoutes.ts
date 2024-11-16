import { Router } from 'express';
import { TeamController } from '../controllers';
import { TeamService } from '../services';
import { TeamRepository, CityRepository } from '../repositories';

const router = Router();

const teamRepository = new TeamRepository();
const cityRepository = new CityRepository();
const teamService = new TeamService(teamRepository, cityRepository);
const teamController = new TeamController(teamService);

router.post('/', teamController.create.bind(teamController));
router.get('/', teamController.getAll.bind(teamController));
router.delete('/:id', teamController.delete.bind(teamController));
router.put('/:id', teamController.update.bind(teamController));

export default router;
