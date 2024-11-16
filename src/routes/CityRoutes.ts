import { Router } from 'express';
import { CityController } from '../controllers';
import { CityService } from '../services';
import { CityRepository } from '../repositories';

const router = Router();

const cityRepository = new CityRepository();
const cityService = new CityService(cityRepository);
const cityController = new CityController(cityService);

router.post('/', cityController.create.bind(cityController));
router.put('/:id', cityController.update.bind(cityController));
router.get('/', cityController.getAll.bind(cityController));

export default router;
