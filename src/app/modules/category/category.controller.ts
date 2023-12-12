import { Request, Response } from 'express';
import { CategoryService } from './category.service';

const createCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const result = await CategoryService.createCategoryIntoDB(categoryData);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Category created successfully',
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

const getAllCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.getAllCategoryFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Categories retrieved successfully',
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

export const CategoryControllers = {
  createCategory,
  getAllCategory,
};
