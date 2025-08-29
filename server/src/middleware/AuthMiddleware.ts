import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export class AuthMiddleware {
    static authenticateJWT(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Token missing or malformed' });
        }

        try {
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
            (req as any).userId = decoded.userId;
            next();
        } catch (err) {
            res.status(401).json({ error: 'Invalid or expired token' });
        }
    }
}
