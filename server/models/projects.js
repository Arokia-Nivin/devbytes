const mongoose=require("mongoose"); 

const {Schema}= mongoose; 

const ProjectSchema= new Schema({
    title:{
        type:String, 
        required:true
    },
    description:{
        type:String, 
        required:true 
    },
   
    members:{
        type:[String], 
        required:true 
    },
    guide:{
        type:String, 
        required: true
    },
    requirements:{
        type:String, 
        required:true 
    },

    status:{
        type:String, 
        required: true, 
    }, 
   
})

module.exports=mongoose.model('Projects',ProjectSchema); 