import { Router } from 'express';
import { PropertyController } from '../controller/PropertyController';

const router = Router();

// Define routes and bind controller methods
router.get('/', PropertyController.getAll);
router.get('/:id', PropertyController.getOne);
router.post('/', PropertyController.create);
router.put('/:id', PropertyController.update);
router.delete('/:id', PropertyController.delete);

export default router;
