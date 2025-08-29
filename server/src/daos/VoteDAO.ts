import { AppDataSource } from '../core/database/AppDataSource';
import { Vote } from '../entities/Vote';

export class VoteDAO {
    private repo = AppDataSource.getRepository(Vote);

    async createVote(userId: number, electionId: number, candidateId: number) {
        const vote = this.repo.create({
            user: { id: userId },
            election: { id: electionId },
            candidate: { id: candidateId },
        });

        return this.repo.save(vote);
    }

    async hasUserVoted(userId: number, electionId: number) {
        return this.repo.findOne({
            where: {
                user: { id: userId },
                election: { id: electionId },
            },
        });
    }
}
