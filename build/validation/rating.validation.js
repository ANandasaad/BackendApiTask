"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ratingValidation = void 0;
const express_validator_1 = require("express-validator");
exports.ratingValidation = {
    createValidate: [
        (0, express_validator_1.body)("rating")
            .trim()
            .notEmpty()
            .withMessage("Rating is required")
            .isString()
            .withMessage("Rating must be a string")
            .bail(),
        (0, express_validator_1.body)("review")
            .trim()
            .notEmpty()
            .withMessage("Rating is required")
            .isString()
            .withMessage("Rating must be a string")
            .bail(),
    ],
    updateValidate: [
        (0, express_validator_1.body)("rating")
            .trim()
            .notEmpty()
            .withMessage("Rating is required")
            .isString()
            .withMessage("Rating must be a string")
            .bail(),
        (0, express_validator_1.body)("review")
            .trim()
            .notEmpty()
            .withMessage("Rating is required")
            .isString()
            .withMessage("Rating must be a string")
            .bail(),
        (0, express_validator_1.param)("id").isMongoId().withMessage("Invalid ID"),
    ],
};
