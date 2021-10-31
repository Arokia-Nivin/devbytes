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
        required: true,
        default : 'Dr. k Latha',
    },
    domain:{
        type:String, 
        required :true,
        enum : ['webdevelopment', 'appdevelopment','iot','machinelearning','coding'],
        default:'coding'
    },

    status:{
        type:String, 
        required: true, 
        default: 'active', 
        enum: ['active', 'completed'],
    }, 
   
})

module.exports=mongoose.model('Projects',ProjectSchema); 