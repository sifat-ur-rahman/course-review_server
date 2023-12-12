import { Request, Response } from 'express';
import { CourseService } from './course.service';

const createCourse = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    const result = await CourseService.createCourseIntoDB(userData);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Course created successfully',
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

const getAllCourse = async (req: Request, res: Response) => {
  try {
    const result = await CourseService.getAllCourseFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Courses retrieved successfully',
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
const getOneCourseWithReview = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const result = await CourseService.getOneCourseWithReviewFromDB(courseId);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Course and Reviews retrieved successfully',
      data: result,
    });

    if (!result) {
      res.status(500).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
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

const updateCourse = async (req: Request, res: Response) => {
  try {
    const id = req.params.courseId;
    const updatedCourseData = req.body;
    const result = await CourseService.updateCourseFromDB(
      id,
      updatedCourseData,
    );

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Course updated successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
      err,
    });
  }
};

export const CourseControllers = {
  createCourse,
  getAllCourse,
  getOneCourseWithReview,
  updateCourse,
};
