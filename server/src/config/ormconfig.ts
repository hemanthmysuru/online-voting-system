import { DataSourceOptions } from "typeorm";
import { User } from "../entities/User";
import { Election } from "../entities/Election";
import { Candidate } from "../entities/Candidate";
import { Vote } from "../entities/Vote";

export const ormConfig: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User, Election, Candidate, Vote],
    // migrations: ['src/migrations/**/*.ts'],
    // subscribers: ['src/subscribers/**/*.ts'],
}