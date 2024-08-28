    import Book,{IBook} from '../Model/books'

    class BookService{

        public async getAllBooks():Promise<IBook[]> {

            try {

                const books = await Book.find()
                
                return books;
                
            } catch (error) {
                 throw new Error('Error fetching books: ' + error);
            }
        }
    }

    class deleteBook{

        public async delete(id:string) : Promise<IBook | null> {

            try {
                
                const deleteBooks = await Book.findByIdAndDelete(id)               
                return deleteBooks;

            } catch (error) {
                 throw new Error('Failed to delete the book');
            }

        }
    }

    

    export {BookService,deleteBook} ;