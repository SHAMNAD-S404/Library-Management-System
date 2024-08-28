
import mongoose,{Document, Schema} from "mongoose";

export interface IBook extends Document {

    tittle : string;
    author : string;
    year   : number
    price  : number
}

const  bookShema: Schema = new Schema<IBook> ({

    tittle : {
        type : String,
        required : true
    },

    author : {
        type : String,
        required : true
    },

    year : {
        type : Number,
        required : true
    },

    price : {
        type : Number,
        required : true
    }
    
    
})

export default mongoose.model<IBook>('Book',bookShema)


