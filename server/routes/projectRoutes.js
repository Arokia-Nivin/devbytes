const express=require("express"); 
const router=express.Router(); 
const Project=require("../models/projects"); 

router.get("/", async (req,res)=>{
    const {limit}= req.query;
    try
    {
        if (limit)
        {
            const projects=await Project.find({}).sort({ _id: -1 }).limit(parseInt(limit));
            res.send({projects});
        }
        else 
        {
            const  projects=await Project.find({}).sort({_id:-1});
            res.send({projects}); 
        }

    }
    catch(err)
    {
        res.status(500).send(err); 
    }
})
router.get("/status/:status", async (req,res)=>{
    let {status}= req.params;
    try
    {
        status=status.toLowerCase();
        if (status!=='all')
        {
            const  projects=await Project.find({status}).sort({_id:-1});
            res.send({projects}); 
        }
        else 
        {
            const  projects=await Project.find({}).sort({_id:-1});
            res.send({projects}); 
        }
     

    }
    catch(err)
    {
        res.send(500).send(err); 
    }


})
router.get("/:id",async(req,res)=>{
    const {id}=req.params;
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