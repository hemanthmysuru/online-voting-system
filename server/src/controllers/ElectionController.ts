import { Request, Response } from 'express';
import { ElectionService } from '../services/ElectionService';

export class ElectionController {
    private service = new ElectionService();

    getUpcoming = async (_req: Request, res: Response) => {
        const elections = await this.service.getUpcomingElections();
        res.json(elections);
    };

    getCurrent = async (_req: Request, res: Response) => {
        const election = await this.service.getCurrentElection();
        if (!election) return res.status(404).json({ message: 'No current election' });
        res.json(election);
    };

    castVote = async (req: Request, res: Response) => {
        try {
            const userId = (req as any).userId;
            const { electionId, candidateId } = req.body;

            await this.service.castVote(userId, electionId, candidateId);
            res.status(201).json({ success: true });
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };
}
