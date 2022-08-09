import { Feedback } from '../entity/feedback.entity';

import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'tai.db.elephantsql.com',
                port: 5432,
                username: 'mservqmi',
                password: 'SGm5zKocmPMnoIyccysLP6wCDvxQW-57',
                database: 'mservqmi',
                entities: [Feedback],
                // synchronize: true, //only for dev
            });

            return dataSource.initialize();
        },
    },
];
