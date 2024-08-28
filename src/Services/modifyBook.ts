    import Books ,{IBook} from '../Model/books'

    class updatService {

        public async updateBook(id:string, updateData: Partial<IBook>) : Promise<IBook | null > {

            try {

                const update = await Books.findByIdAndUpdate(id, updateData,{new:true})
                return update;
                
            } catch (error) {
                throw new Error('Failed to update the book: ' + error);
            }
        }
    }

    export default updatService;