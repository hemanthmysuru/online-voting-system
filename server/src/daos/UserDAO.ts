import { AppDataSource } from "../core/database/AppDataSource";
import { User } from "../entities/User";

export class UserDAO {
  private repo = AppDataSource.getRepository(User);

  async findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  async create(user: Partial<User>) {
    return this.repo.save(user);
  }

  async findById(id: number) {
    return this.repo.findOne({ where: { id } });
  }
}