const mongoose = require("mongoose");

const schema = mongoose.schema;

const noteSchema = new Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    tags:{type:[String],default:[]},
    isPinned:{type:boolean,default:false},
    userId:{type:String}

})