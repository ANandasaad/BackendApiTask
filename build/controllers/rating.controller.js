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
exports.RatingController = void 0;
const rating_business_logic_1 = require("../business-logic/rating.business.logic");
exports.RatingController = {
    createRating(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = req.body;
                const response = yield rating_business_logic_1.RatingLogic.createRating(input);
                res.json({
                    success: true,
                    message: "Rating created successfully",
                    data: response,
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
    getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield rating_business_logic_1.RatingLogic.getById(id);
                res.json({
                    success: true,
                    message: "Get by Id",
                    data: response
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
    getAllRating(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield rating_business_logic_1.RatingLogic.getAllRating();
                res.json({
                    success: true,
                    message: "Successfully retrieved the data ",
                    data: response
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
    updateRating(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ratingId = req.params.id;
                const input = req.body;
                const response = yield rating_business_logic_1.RatingLogic.updateRating({ ratingId, input });
                res.json({
                    success: true,
                    message: "Rating updated successfully",
                    data: response,
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
    countApi(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield rating_business_logic_1.RatingLogic.countRating();
                res.json({
                    success: true,
                    message: "Rating count successfully",
                    data: response,
                });
            }
            catch (error) {
                next(error);
            }
        });
    },
};
