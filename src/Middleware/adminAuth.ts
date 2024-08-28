
import { NextFunction, Request,Response } from "express";

 interface customRequest extends Request {

    session : {
        admin? : string
    }
 }


const isLogin = async(req:Request , res:Response, next:NextFunction) :Promise<void> => {

    try {

        const customReq = req as customRequest

        if (!customReq.session.admin) {
            return res.redirect('/admin')
        }

        next()
        
    } catch (error) {
        console.log(error);
        
    }
}

 const isLogout = async(req:Request, res:Response, next:NextFunction) : Promise<void> => {

    try {

        const customReq = req as customRequest

        if (customReq.session.admin) {
            return res.redirect('/admin/home')
        }

        next();
        
    } catch (error) {
        console.log(error);
        
    }
 }

 export { isLogin, isLogout }