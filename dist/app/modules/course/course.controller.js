"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseControllers = void 0;
const course_service_1 = require("./course.service");
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const result = yield course_service_1.CourseService.createCourseIntoDB(userData);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Course created successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'User not found',
            error: {
                code: 404,
                description: 'User not found!',
            },
        });
    }
});
const getAllCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield course_service_1.CourseService.getAllCourseFromDB();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Courses retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'User not found',
            error: {
                code: 404,
                description: 'User not found!',
            },
        });
    }
});
const getOneCourseWithReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const result = yield course_service_1.CourseService.getOneCourseWithReviewFromDB(courseId);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'User not found',
            error: {
                code: 404,
                description: 'User not found!',
            },
        });
    }
});
const updateCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.courseId;
        const updatedCourseData = req.body;
        const result = yield course_service_1.CourseService.updateCourseFromDB(id, updatedCourseData);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Course updated successfully',
            data: result,
        });
    }
    catch (err) {
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
});
exports.CourseControllers = {
    createCourse,
    getAllCourse,
    getOneCourseWithReview,
    updateCourse,
};
