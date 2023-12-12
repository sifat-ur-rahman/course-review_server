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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const review_model_1 = require("../review/review.model");
const course_model_1 = require("./course.model");
const createCourseIntoDB = (Data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.Course.create(Data);
    return result;
});
const getAllCourseFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield course_model_1.Course.find();
    return result;
});
const getOneCourseWithReviewFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const course = yield course_model_1.Course.findById(id);
    const reviews = yield review_model_1.Review.find({ courseId: id });
    const result = {
        course,
        reviews,
    };
    return result;
});
const updateCourseFromDB = (id, updatedCourseData) => __awaiter(void 0, void 0, void 0, function* () {
    const { tags, details } = updatedCourseData, remainingStudentData = __rest(updatedCourseData, ["tags", "details"]);
    const modifiedUpdatedData = Object.assign({}, remainingStudentData);
    if (details && Object.keys(details).length) {
        for (const [key, value] of Object.entries(details)) {
            modifiedUpdatedData[`details.${key}`] = value;
        }
    }
    if (tags && tags.length > 0) {
        // filter out the deleted fields
        const deletedTag = tags
            .filter((el) => el.name && el.isDeleted)
            .map((el) => el.name);
        const deletedTags = yield course_model_1.Course.findByIdAndUpdate(id, {
            $pull: {
                tags: { name: { $in: deletedTag } },
            },
        }, {
            new: true,
            runValidators: true,
        });
        // filter out the new course fields
        const newTags = tags === null || tags === void 0 ? void 0 : tags.filter((el) => el.name && !el.isDeleted);
        const newTag = yield course_model_1.Course.findByIdAndUpdate(id, {
            $addToSet: { tags: { $each: newTags } },
        }, {
            new: true,
            runValidators: true,
        });
    }
    const result = yield course_model_1.Course.findByIdAndUpdate(id, modifiedUpdatedData, {
        new: true,
        runValidators: true,
    });
    return result;
});
exports.CourseService = {
    createCourseIntoDB,
    getAllCourseFromDB,
    getOneCourseWithReviewFromDB,
    updateCourseFromDB,
};
