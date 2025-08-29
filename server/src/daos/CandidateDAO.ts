import { AppDataSource } from '../core/database/AppDataSource';
import { Candidate } from '../entities/Candidate';

export class CandidateDAO {
    private repo = AppDataSource.getRepository(Candidate);

    async findById(id: number) {
        return this.repo.findOne({ where: { id }, relations: ['election'] });
    }
}
