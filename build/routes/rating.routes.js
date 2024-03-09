"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rating_validation_1 = require("../validation/rating.validation");
const validate_middleware_1 = require("../middleware/validate.middleware");
const rating_controller_1 = require("../controllers/rating.controller");
const router = express_1.default.Router();
router.post("/create-rating", rating_validation_1.ratingValidation.createValidate, validate_middleware_1.validate, rating_controller_1.RatingController.createRating);
router.put("/update-rating/:id", rating_validation_1.ratingValidation.updateValidate, validate_middleware_1.validate, rating_controller_1.RatingController.updateRating);
router.get("/get-by-id/:id", rating_controller_1.RatingController.getById);
router.get("/get-all", rating_controller_1.RatingController.getAllRating);
router.get("/count", rating_controller_1.RatingController.countApi);
exports.default = router;
