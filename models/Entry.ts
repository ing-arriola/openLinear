import mongoose, {Model,Schema} from 'mongoose'
import { Entry } from '../interfaces/entry';

interface IEntry extends Entry{
   
}

const entrySchema = new Schema({
    description:{type:String, required:true},
    createdAt:{type:Number},
    status:{type:String, 
        enum:{
            values:['todo','in-progress','done'],
            message:'{VALUE} is not a valid status'
        }
    },
})  

const EntryModel:Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry',entrySchema)

export default EntryModel