"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLogout = exports.isLogin = void 0;
const isLogin = async (req, res, next) => {
    try {
        const customReq = req;
        if (!customReq.session.admin) {
            return res.redirect('/admin');
        }
        next();
    }
    catch (error) {
        console.log(error);
    }
};
exports.isLogin = isLogin;
const isLogout = async (req, res, next) => {
    try {
        const customReq = req;
        if (customReq.session.admin) {
            return res.redirect('/admin/home');
        }
        next();
    }
    catch (error) {
        console.log(error);
    }
};
exports.isLogout = isLogout;
