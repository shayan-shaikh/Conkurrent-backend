import mongoose, { Schema } from "mongoose";

const suggestionSchema = new Schema({
    id:{
      type:String,
      required:true
    },
    topic: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ['New', 'ToDo', 'In Progress', 'Done'],
      default: 'New'
    },
    addedAt: {
      type: Date,
      default: Date.now
    },
    completedAt: {
      type: Date,
      default: null
    }
  });
  
const Suggestion = mongoose.model('Suggestion', suggestionSchema);

export default Suggestion