import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { ReviewControllers } from './review.controller';
import reviewValidationSchema from './review.validation';

const router = express.Router();

router.post(
  '/api/reviews',
  validateRequest(reviewValidationSchema),
  ReviewControllers.createReview,
);

export const ReviewRoute = router;
