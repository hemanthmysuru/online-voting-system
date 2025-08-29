import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';
import ms from 'ms';

export class JwtUtil {
    private static secret = process.env.JWT_SECRET || 'default_secret';

    private static expiresIn = (process.env.JWT_EXPIRES_IN || '1h') as ms.StringValue;

    private static expiresInSeconds = Math.floor(ms(this.expiresIn)! / 1000);

    static generateToken(userId: number): string {
        const options: SignOptions = {
            expiresIn: this.expiresInSeconds,
        };

        return jwt.sign({ userId }, this.secret, options);
    }

    static verifyToken(token: string): JwtPayload | null {
        try {
            return jwt.verify(token, this.secret) as JwtPayload;
        } catch (error) {
            console.error('JWT verification failed:', error);
            return null;
        }
    }
}
