import { feedbackProvider } from './../providers/feedback.provider';
import { Module } from '@nestjs/common';
import { DataBaseModel } from 'src/database/database.module';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';

@Module({
    imports: [DataBaseModel],
    controllers: [FeedbackController],
    providers: [...feedbackProvider, FeedbackService],
})
export class FeedbackModule {}
