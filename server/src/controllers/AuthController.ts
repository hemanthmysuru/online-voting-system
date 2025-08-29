import { Request, Response } from 'express';
import { AuthService } from "../services/AuthService";

export class AuthController {

    private authService = new AuthService();

    register = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body;
            const result = await this.authService.register(name, email, password);
            res.status(201).json(result);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const result = await this.authService.login(email, password);
            res.json(result);
        } catch (err: any) {
            res.status(401).json({ error: err.message });
        }
    };

    logout = (req: Request, res: Response) => {
        res.json({ success: true });
    };
}