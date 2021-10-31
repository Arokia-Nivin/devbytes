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
        default:1, 
    }, 
    location:{
        type:String, 
        required:true,
        default: 'sri sairam engineering college',
    },
    mode: {
        type: String, 
        required: true ,
        enum : ['online','offline'],
        default: 'online',
    },
    posterurl:{
        type:String,
        default : `https://media-exp1.licdn.com/dms/image/C5622AQHZ2gjRis3yxg/feedshare-shrink_800/0/1635524835543?e=1638403200&v=beta&t=lGm_S_vhnYD8Aifdgc9wuDP_b3yF_PPs5zv6N_zVJSQ`,

    },
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
    meetlink:{
        type:String, 
        required:true
    }, 
    eventtype:
    {
        type:String, 
        enum:["webinar", "workshop", "technicalevent", "nontechnicalevent", "hackathon", "ideathon"],
    }
})

module.exports=mongoose.model('Events',EventSchema); 