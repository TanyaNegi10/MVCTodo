const mongoose=require("mongoose");
const todoSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:20,
    },
    description:{
        type:String,
        required:true,
        maxlength:50,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true,
    },
    updatedAt:{
        type:Date,
        default:Date.now(),
        required:true,
    },
});
const todoModel=mongoose.model("Todo",todoSchema);
module.exports=todoModel;