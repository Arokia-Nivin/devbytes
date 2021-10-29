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
    eventdate:{
        type:Date, 
        required:true
    },
    noofdays:{
        type:Number,
        required:true,
    }, 
    location:{
        type:String, 
        required:true,
    },
    mode: {
        type: String, 
        required: true 
        //enum
    } ,
    registrationformurl:{
        type:String,
        required: true 
    },
    whatsappgrouplink:{
        type:String,
        required: true 
    },
    telegramgrouplink:{
        type:String, 
        required:true, 
    },
    zoommeetlink:{
        type:String, 
        required:true
    }
})

module.exports=mongoose.model('Events',EventSchema); 