"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const books_1 = __importDefault(require("../Model/books"));
class AddBook {
    constructor(tittle, author, year, price) {
        this.tittle = tittle;
        this.author = author;
        this.year = year;
        this.price = price;
    }
    async save() {
        try {
            const bookData = new books_1.default({
                tittle: this.tittle,
                author: this.author,
                year: this.year,
                price: this.price
            });
            const saveBook = await bookData.save();
            return saveBook;
        }
        catch (error) {
            console.log(error);
            throw new Error('Failed to save the book');
        }
    }
}
exports.default = AddBook;
