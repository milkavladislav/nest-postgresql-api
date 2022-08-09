import { Feedback } from './../entity/feedback.entity';
import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';

export const feedbackProvider: Provider[] = [
    {
        provide: 'FEEDBACK_REPOSITORY',
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(Feedback),
        inject: ['DATA_SOURCE'],
    },
];
