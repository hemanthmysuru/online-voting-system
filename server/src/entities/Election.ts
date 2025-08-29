import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Candidate } from './Candidate';
import { Vote } from './Vote';

@Entity()
export class Election {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @OneToMany(() => Candidate, candidate => candidate.election)
    candidates: Candidate[];

    @OneToMany(() => Vote, vote => vote.election)
    votes: Vote[];
}
