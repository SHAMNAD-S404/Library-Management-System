    import { Request,Response } from "express";
    import Book from '../Services/book'
    import { BookService ,deleteBook} from '../Services/getBook'
    import updatService from '../Services/modifyBook'
    require('dotenv').config()

    
    interface customRequest extends Request {

        session : {
            admin?:string
        }
    }

  

    const login = async (req:Request,res:Response) =>{

        try {
            res.render('login')
        } catch (error) {
            console.log(error);       
        }
    }

    const authVerify = async (req:Request, res:Response) => {

            try {
                
               const userName : string = req.body.username
               const password : string = req.body.password
               const customReq = req as customRequest

               if (userName !== process.env.ADMIN_ID  || password !== process.env.ADMIN_PASS) {

                    return res.status(400).json({error:'userid or password is incorrect'})
               }else{

                    customReq.session.admin = userName;                

                    return res.status(200).json({success:"Welcome Admin"})
               }
                

            } catch (error) {
                console.log(error);
                
            }
    }

    const home = async(req:Request, res:Response):Promise<void> => {

        try {

            const bookService = new BookService()
            const books = await bookService.getAllBooks()

            res.render('home',{books})
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const addBooks = async (req:Request, res:Response): Promise<void> => {

        try {

            const {tittle,author,year,price}  = req.body

            //creating new book instance
            const newBook = new Book(tittle,author,year,price);

            //saving the book using the newBook feature
            const saveBook = await newBook.save();

            res.status(201).json({sucess:'book saved'})

            
        } catch (error) {
            console.log(error);
            
        }
    }

    const deleteBooks = async(req:Request,res:Response) : Promise<void> => {

        try {
            
            const id = req.query.id as string;

            const deleteClass = new deleteBook()
            const deletedBook = await deleteClass.delete(id)


            if (deleteBook) {
                 res.status(200).json({success:"deleted successfully"})
            } else {
                res.status(400).json({error:"book not found"})
            }

        } catch (error) {
            console.log(error);
            
        }

    }

    const updateBook = async(req:Request , res:Response) : Promise<void> => {

        try {

            const{id,tittle,author,year,price} = req.body;

            const updateServices = new updatService();
            const update = await updateServices.updateBook(id,{tittle,author,year,price})

            if (update) {
                res.status(200).json({success:'success'})
            } else {
                res.status(400).json({error: "failed"})
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const logout = async (req:Request, res:Response):Promise<void> => {

        try {

            const customReq = req as customRequest
            delete customReq.session.admin;
            res.redirect('/admin')
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    






    module.exports = {
        login,
        authVerify,
        home,
        addBooks,
        deleteBooks,
        updateBook,
        logout
    }
