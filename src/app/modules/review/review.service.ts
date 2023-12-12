import { TReview } from './review.interface';
import { Review } from './review.model';

const createReviewIntoDB = async (Data: TReview) => {
  const result = await Review.create(Data);
  return result;
};

export const ReviewService = {
  createReviewIntoDB,
};
