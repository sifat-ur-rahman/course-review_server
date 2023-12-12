import { Request, Response } from 'express';
import { ReviewService } from './review.service';

const createReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body;
    const result = await ReviewService.createReviewIntoDB(reviewData);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Review created successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

export const ReviewControllers = {
  createReview,
};
