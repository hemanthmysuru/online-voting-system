import { Entity, PrimaryGeneratedColumn, ManyToOne, Unique } from 'typeorm';
import { User } from './User';
import { Election } from './Election';
import { Candidate } from './Candidate';

@Entity()
@Unique(['user', 'election'])
export class Vote {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.votes)
    user: User;

    @ManyToOne(() => Election, election => election.votes)
    election: Election;

    @ManyToOne(() => Candidate, candidate => candidate.votes)
    candidate: Candidate;
}
