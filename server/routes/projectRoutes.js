const express=require("express"); 
const router=express.Router(); 
const Project=require("../models/projects"); 

router.get("/", async (req,res)=>{
    try
    {
        const  projects=await Project.find({});
        res.send({projects}); 

    }
    catch(err)
    {
        res.status(500).send(err); 
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const project=await Project.findById(id); 
        res.send({project});
    }
    catch(err)
    {
        res.status(500).send(err);
    }
})

module.exports=router; 