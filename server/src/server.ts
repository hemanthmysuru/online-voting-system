import dotenv from 'dotenv';
dotenv.config();

import { app } from './app';
import { AppDataSource } from './core/database/AppDataSource';
import { createDatabaseIfNotExists } from './core/database/createDatabase';

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await createDatabaseIfNotExists();
        await AppDataSource.initialize();

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error during initialization:', error);
    }

}

startServer();