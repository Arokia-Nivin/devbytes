const express=require("express"); 
const router=express.Router(); 
const Contact=require("../models/contacts");

router.get("/", async (req,res)=>{
    try{
        const contacts= await Contact.find({});
        res.send({contacts});
    }
    catch(err)
    {
        res.status(500).send(err);
    }
})

module.exports=router;