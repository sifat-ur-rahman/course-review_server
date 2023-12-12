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

const getBestReview = async (req: Request, res: Response) => {
  try {
    const result = await ReviewService.getBestReviewFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Best course retrieved successfully',
      data: result,
    });
  } catch (error) {
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
  getBestReview,
};
