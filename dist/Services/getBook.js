"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.BookService = void 0;
const books_1 = __importDefault(require("../Model/books"));
class BookService {
    async getAllBooks() {
        try {
            const books = await books_1.default.find();
            return books;
        }
        catch (error) {
            throw new Error('Error fetching books: ' + error);
        }
    }
}
exports.BookService = BookService;
class deleteBook {
    async delete(id) {
        try {
            const deleteBooks = await books_1.default.findByIdAndDelete(id);
            return deleteBooks;
        }
        catch (error) {
            throw new Error('Failed to delete the book');
        }
    }
}
exports.deleteBook = deleteBook;
