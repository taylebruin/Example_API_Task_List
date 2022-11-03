
var mongoose = require('mongoose');
const { Schema } = mongoose;
// creates schema for use with mongoose
const TaskSchema = new Schema({
    UserId: String,
    Text: String,
    Done: Boolean,
    Date: String,
   // collection: 'Task'
    
},
{
    //defines collection to be added to when object is sent to mongoose
    collection: 'Tasks' 
}
);

const Task = mongoose.model('Task', TaskSchema);
//exports model to be used by rest of project
module.exports = Task;





/*

This file is for creating a Mongoose Model/Schema

*/
