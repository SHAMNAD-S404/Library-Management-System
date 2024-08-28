"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const books_1 = __importDefault(require("../Model/books"));
class updatService {
    async updateBook(id, updateData) {
        try {
            const update = await books_1.default.findByIdAndUpdate(id, updateData, { new: true });
            return update;
        }
        catch (error) {
            throw new Error('Failed to update the book: ' + error);
        }
    }
}
exports.default = updatService;
