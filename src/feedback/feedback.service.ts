import { Feedback } from './../entity/feedback.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class FeedbackService {
    constructor(
        @Inject('FEEDBACK_REPOSITORY')
        private feedbackRepository: Repository<Feedback>,
    ) {}

    async getFeedback(): Promise<Feedback[]> {
        return this.feedbackRepository.find();
    }

    async addFeedback(feedback: Feedback): Promise<InsertResult> {
        return this.feedbackRepository.insert(feedback);
    }
}
