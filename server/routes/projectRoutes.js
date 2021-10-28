const express=require("express"); 
const router=express.Router(); 
const Event=require("../models/projects"); 

router.get("/",(req,res)=>{
    res.send("projects list will be sent from here");
})

module.exports=router; 