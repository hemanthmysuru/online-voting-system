import { AppDataSource } from '../core/database/AppDataSource';
import { Election } from '../entities/Election';

export class ElectionDAO {
    private repo = AppDataSource.getRepository(Election);

    async findUpcoming() {
        return this.repo.createQueryBuilder('election')
            .where('election.startDate > NOW()')
            .getMany();
    }

    async findCurrent() {
        return this.repo
            .createQueryBuilder('election')
            .leftJoinAndSelect('election.candidates', 'candidate')
            .where('election.startDate <= NOW()')
            .andWhere('election.endDate >= NOW()')
            .getOne();
    }

    async findById(id: number) {
        return this.repo.findOne({ where: { id }, relations: ['candidates'] });
    }
}
