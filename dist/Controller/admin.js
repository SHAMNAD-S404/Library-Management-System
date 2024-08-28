"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("../Services/book"));
const getBook_1 = require("../Services/getBook");
const modifyBook_1 = __importDefault(require("../Services/modifyBook"));
require('dotenv').config();
const login = async (req, res) => {
    try {
        res.render('login');
    }
    catch (error) {
        console.log(error);
    }
};
const authVerify = async (req, res) => {
    try {
        const userName = req.body.username;
        const password = req.body.password;
        const customReq = req;
        if (userName !== process.env.ADMIN_ID || password !== process.env.ADMIN_PASS) {
            return res.status(400).json({ error: 'userid or password is incorrect' });
        }
        else {
            customReq.session.admin = userName;
            return res.status(200).json({ success: "Welcome Admin" });
        }
    }
    catch (error) {
        console.log(error);
    }
};
const home = async (req, res) => {
    try {
        const bookService = new getBook_1.BookService();
        const books = await bookService.getAllBooks();
        res.render('home', { books });
    }
    catch (error) {
        console.log(error);
    }
};
const addBooks = async (req, res) => {
    try {
        const { tittle, author, year, price } = req.body;
        //creating new book instance
        const newBook = new book_1.default(tittle, author, year, price);
        //saving the book using the newBook feature
        const saveBook = await newBook.save();
        res.status(201).json({ sucess: 'book saved' });
    }
    catch (error) {
        console.log(error);
    }
};
const deleteBooks = async (req, res) => {
    try {
        const id = req.query.id;
        const deleteClass = new getBook_1.deleteBook();
        const deletedBook = await deleteClass.delete(id);
        if (getBook_1.deleteBook) {
            res.status(200).json({ success: "deleted successfully" });
        }
        else {
            res.status(400).json({ error: "book not found" });
        }
    }
    catch (error) {
        console.log(error);
    }
};
const updateBook = async (req, res) => {
    try {
        const { id, tittle, author, year, price } = req.body;
        const updateServices = new modifyBook_1.default();
        const update = await updateServices.updateBook(id, { tittle, author, year, price });
        if (update) {
            res.status(200).json({ success: 'success' });
        }
        else {
            res.status(400).json({ error: "failed" });
        }
    }
    catch (error) {
        console.log(error);
    }
};
const logout = async (req, res) => {
    try {
        const customReq = req;
        delete customReq.session.admin;
        res.redirect('/admin');
    }
    catch (error) {
        console.log(error);
    }
};
module.exports = {
    login,
    authVerify,
    home,
    addBooks,
    deleteBooks,
    updateBook,
    logout
};
