import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Vote } from "./Vote";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    passwordHash: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => Vote, vote => vote.user)
    votes: Vote[];

}