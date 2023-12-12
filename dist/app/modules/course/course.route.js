"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const course_controller_1 = require("./course.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const course_validation_1 = require("./course.validation");
const router = express_1.default.Router();
router.post('/api/course', (0, validateRequest_1.default)(course_validation_1.courseValidation.courseValidationSchema), course_controller_1.CourseControllers.createCourse);
router.get('/api/courses', course_controller_1.CourseControllers.getAllCourse);
router.get('/api/courses/:courseId/reviews', course_controller_1.CourseControllers.getOneCourseWithReview);
router.put('/api/courses/:courseId', course_controller_1.CourseControllers.updateCourse);
exports.UserRoute = router;
