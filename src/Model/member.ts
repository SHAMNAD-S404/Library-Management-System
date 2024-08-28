
import exp from "constants";
import mongoose,{Document,Schema} from "mongoose";

    enum Gender {

        Male = 'male',
        Female = 'female',
        Other  = 'other'
    }

    interface Imember extends Document {

        name : string,
        gender : Gender,
        location : string,
        phone  : number,
        password : string
        
    }

    const memberSchema:Schema = new Schema<Imember> ({

        name : {
            type : String,
            required : true
        },

        gender  : {
            type : String,
            enum : Object.values(Gender),
            required: true
        },

        location : {
            type : String,
            required : true
        },

        phone : {
            type : Number,
            required : true
        },

        password : {
            type : String,
            required : true
        }

    })

    export default mongoose.model<Imember>('members',memberSchema)