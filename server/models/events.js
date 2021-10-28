const mongoose=require("mongoose"); 

const {Schema}= mongoose; 

const EventSchema= new Schema({
    title:{
        type:String, 
        required:true
    },
    description:{
        type:String, 
        required:true 
    }, 
    mode: {
        type: String, 
        required: true 
    } ,
    registrationformurl:{
        type:String,
        required: true 
    }

})

module.exports=mongoose.model('Event',EventSchema); 