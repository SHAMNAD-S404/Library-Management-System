"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const mongoose = require('mongoose');
const nocache = require('nocache');
const session = require('express-session');
const admin = require('./Routes/admin');
const app = express();
require('dotenv').config();
app.use(nocache());
app.use(express.static('public'));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: false, sameSite: 'strict' }
}));
app.use('/admin', admin);
const port = process.env.PORT || 3003;
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
    console.log('dbs connected...');
}).catch((error) => {
    console.log(error.message);
});
app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`);
});
