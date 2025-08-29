import { CandidateDAO } from "../daos/CandidateDAO";
import { ElectionDAO } from "../daos/ElectionDAO";
import { VoteDAO } from "../daos/VoteDAO";

export class ElectionService {
    private electionDAO = new ElectionDAO();
    private voteDAO = new VoteDAO();
    private candidateDAO = new CandidateDAO();

    async getUpcomingElections() {
        return this.electionDAO.findUpcoming();
    }

    async getCurrentElection() {
        return this.electionDAO.findCurrent();
    }

    async castVote(userId: number, electionId: number, candidateId: number) {
        const alreadyVoted = await this.voteDAO.hasUserVoted(userId, electionId);
        if (alreadyVoted) throw new Error('User has already voted.');

        const candidate = await this.candidateDAO.findById(candidateId);
        if (!candidate || candidate.election.id !== electionId) {
            throw new Error('Invalid candidate for this election.');
        }

        return this.voteDAO.createVote(userId, electionId, candidateId);
    }
}
