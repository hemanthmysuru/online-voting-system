import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';

const authController = new AuthController();
export const AuthRoutes = Router();

AuthRoutes.post('/register', authController.register);
AuthRoutes.post('/login', authController.login);
AuthRoutes.post('/logout', authController.logout);