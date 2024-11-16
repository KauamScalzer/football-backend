import { Router } from 'express';
import { TeamController } from '../controllers';
import { TeamService } from '../services';
import { TeamRepository } from '../repositories';

const router = Router();

const teamRepository = new TeamRepository();
const teamService = new TeamService(teamRepository);
const teamController = new TeamController(teamService);

router.post('/', teamController.create.bind(teamController));

export default router;
