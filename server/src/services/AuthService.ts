import bcrypt from 'bcrypt';
import { JwtUtil } from "../core/jwt/JwtUtil";
import { UserDAO } from "../daos/UserDAO";

export class AuthService {

    private userDAO = new UserDAO();

    async register(name: string, email: string, password: string) {
        const passwordHash = await bcrypt.hash(password, 10);
        const user = await this.userDAO.create({ name, email, passwordHash });
        const token = JwtUtil.generateToken(user.id);
        return { user, token };
    }

    async login(email: string, password: string) {
        const user = await this.userDAO.findByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
            throw new Error('Invalid credentials');
        }
        const token = JwtUtil.generateToken(user.id);
        return { user, token };
    }

}