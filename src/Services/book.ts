
import Book,{IBook} from '../Model/books'

class AddBook{

    private tittle : string
    private author : string
    private year   : number
    private price  : number


    constructor(tittle:string, author:string,year:number,price:number){

        this.tittle = tittle;
        this.author = author;
        this.year   = year;
        this.price  = price;

    }

    public async save(): Promise<IBook> {

        try {

            const bookData:IBook = new Book({

                tittle : this.tittle,
                author : this.author,
                year   : this.year,
                price  : this.price

            })


            const saveBook = await bookData.save();

            return saveBook;
            
        } catch (error) {
            console.log(error);
            throw new Error('Failed to save the book');
            
        }
    }

    
}

export default AddBook;