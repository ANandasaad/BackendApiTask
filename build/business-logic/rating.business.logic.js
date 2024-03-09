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
exports.RatingLogic = void 0;
const config_1 = require("../config");
const http_errors_1 = require("http-errors");
let updateAPiCount = 0;
let addAPiCount = 0;
exports.RatingLogic = {
    createRating(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { rating, review } = input;
                    const create = yield config_1.prisma.rating.create({
                        data: {
                            rating,
                            review,
                        },
                    });
                    addAPiCount += 1;
                    return resolve(create);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    },
    getAllRating() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const getAll = yield config_1.prisma.rating.findMany();
                    if (!getAll)
                        throw new http_errors_1.NotFound("Rating is not found");
                    return resolve(getAll);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    },
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const isExist = yield config_1.prisma.rating.findUnique({
                        where: {
                            id,
                        },
                    });
                    if (!isExist)
                        throw new http_errors_1.NotFound("Rating is not found");
                    return resolve(isExist);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    },
    updateRating({ ratingId, input }) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { rating, review } = input;
                    const isRatingExist = yield config_1.prisma.rating.findUnique({
                        where: {
                            id: ratingId,
                        },
                    });
                    if (!isRatingExist)
                        throw new http_errors_1.NotFound("Rating not found");
                    const updateRating = yield config_1.prisma.rating.update({
                        where: {
                            id: ratingId,
                        },
                        data: {
                            rating,
                            review,
                        },
                    });
                    updateAPiCount++;
                    return resolve(updateRating);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    },
    countRating() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    return resolve({ addAPiCount, updateAPiCount });
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    },
};
