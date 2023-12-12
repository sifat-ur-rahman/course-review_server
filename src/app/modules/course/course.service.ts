import { Review } from '../review/review.model';
import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDB = async (Data: TCourse) => {
  const result = await Course.create(Data);

  return result;
};
const getAllCourseFromDB = async () => {
  const result = await Course.find();
  return result;
};
const getOneCourseWithReviewFromDB = async (id: string) => {
  const course = await Course.findById(id);
  const reviews = await Review.find({ courseId: id });

  const result = {
    course,
    reviews,
  };
  return result;
};
const updateCourseFromDB = async (
  id: string,
  updatedCourseData: Partial<TCourse>,
): Promise<TCourse | null> => {
  const { details, ...remainingStudentData } = updatedCourseData;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (details && Object.keys(details).length) {
    for (const [key, value] of Object.entries(details)) {
      modifiedUpdatedData[`details.${key}`] = value;
    }
  }
  const result = await Course.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const CourseService = {
  createCourseIntoDB,
  getAllCourseFromDB,
  getOneCourseWithReviewFromDB,
  updateCourseFromDB,
};
