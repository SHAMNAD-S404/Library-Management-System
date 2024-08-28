    import { Request,Response } from "express"

    const express    = require('express')
    const adminController = require('../Controller/admin')
    const adminRoute = express()
    const adminAuth  = require('../Middleware/adminAuth')

    adminRoute.set ('view engine','ejs');
    adminRoute.set ('views','./view/admin');


    adminRoute.get    ('/',adminAuth.isLogout,adminController.login)
              .get    ('/home',adminAuth.isLogin,adminController.home)
              .get    ('/logout',adminAuth.isLogin,adminController.logout)
              .post   ('/verify',adminAuth.isLogout,adminController.authVerify)
              .post   ('/add-book',adminAuth.isLogin,adminController.addBooks)
              .patch  ('/edit-book',adminAuth.isLogin,adminController.updateBook)
              .delete ('/delete-book',adminAuth.isLogin,adminController.deleteBooks)



    module.exports = adminRoute




