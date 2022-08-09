import { Feedback } from './../entity/feedback.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeedbackService } from './feedback.service';

@Controller()
export class FeedbackController {
    constructor(private feedbackService: FeedbackService) {}

    @Get()
    getAllFeedbacks(): Promise<Feedback[]> {
        return this.feedbackService.getFeedback();
    }

    @Post()
    create(@Body() feedback: Feedback) {
        return this.feedbackService.addFeedback(feedback);
    }
}
