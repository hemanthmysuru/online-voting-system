import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Election } from './Election';
import { Vote } from './Vote';

@Entity()
export class Candidate {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    party: string;

    @Column()
    sign: string;

    @ManyToOne(() => Election, election => election.candidates)
    election: Election;

    @OneToMany(() => Vote, vote => vote.candidate)
    votes: Vote[];
}
