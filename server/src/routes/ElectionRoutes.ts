import { Router } from 'express';
import { ElectionController } from '../controllers/ElectionController';
import { AuthMiddleware } from '../middleware/AuthMiddleware';

const controller = new ElectionController();
export const ElectionRoutes = Router();

ElectionRoutes.get('/upcoming', controller.getUpcoming);
ElectionRoutes.get('/current', controller.getCurrent);
ElectionRoutes.post('/vote', AuthMiddleware.authenticateJWT, controller.castVote);
