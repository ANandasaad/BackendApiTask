import { body, param } from "express-validator";

export const ratingValidation = {
  createValidate: [
    body("rating")
      .trim()
      .notEmpty()
      .withMessage("Rating is required")
      .isString()
      .withMessage("Rating must be a string")
      .bail(),

    body("review")
      .trim()
      .notEmpty()
      .withMessage("Rating is required")
      .isString()
      .withMessage("Rating must be a string")
      .bail(),
  ],
  updateValidate: [
    body("rating")
      .trim()
      .notEmpty()
      .withMessage("Rating is required")
      .isString()
      .withMessage("Rating must be a string")
      .bail(),

    body("review")
      .trim()
      .notEmpty()
      .withMessage("Rating is required")
      .isString()
      .withMessage("Rating must be a string")
      .bail(),
    param("id").isMongoId().withMessage("Invalid ID"),
  ],
};
