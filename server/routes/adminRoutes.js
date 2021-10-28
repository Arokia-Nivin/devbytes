const express=require("express"); 
const router=express.Router(); 
const Event=require("../models/events"); 
const Project=require("../models/projects"); 

router.get("/",(req,res)=>{
    res.send("I am admin");
})

router.get("/events", async (req,res)=>{
    try{
        const events=await Event.find({}); 
        res.send({events}); 
    }
    catch(err)
    {
        res.status(500).send("err");
    }
})

router.get("/projects",async (req,res) =>{
    try{
        const projects=await Project.find({}); 
        res.send({Projects}); 
    }catch(err)
    {
        res.status(500).send(err);

    }
})
router.get("/events/:id", async(req,res)=>{
    const {id}= req.params; 
    try{
        const event= await Event.findById(id); 
        res.send(event);
    }
    catch(err)
    {
        res.status.send(err); 
    }
})

router.get("/project/:id", async(req,res)=>{
    const {id}= req.params; 
    try{
        const project= await project.findById(id); 
        res.send(project);
    }
    catch(err)
    {
        res.status.send(err); 
    }
})

//in frontend we have to show the form using react dom
router.post("/events", async(req,res) =>{
    req.body; 
    res.redirect("/admin/events"); //frontend route 
})

router.post("/projects", async(req,res)=>{
    req.body;
    res.redirect("/admin/projects"); //frontend route
})


router.patch("/events/:id", async(req,res)=>{
    const {id}= req.params; 
    try
    {
        await Event.findByIdAndUpdate(id); 
        res.redirect("/admin/events/"+id); //frontendroute;
    }
    catch(err)
    {
        res.status(500).send(err); 
    }
})

router.patch("/projects/:id", async(req,res)=>{
    const {id}= req.params; 
    try
    {
        await Project.findByIdAndUpdate(id); 
        res.redirect("/admin/projects"+id); //frontendroute;
    }
    catch(err)
    {
        res.status(500).send(err); 
    }
})
router.delete("/events/:id", async(req,res)=>{
    const {id}= req.params; 
    try
    {
        await Event.findByIdAndDelete(id); 
        res.redirect("/admin/events"); //redirect to frontend route 
    }
    catch(err)
    {
        res.status(500).send(err); 
    }
})

router.delete("/projects/:id", async(req,res)=>{
    const {id}= req.params; 
    try
    {
        await Project.findByIdAndDelete(id);
        res.redirect("/admin/projects");  //frontend route 
    }
    catch(err)
    {
        res.status(500).send(err); 
    }
})



module.exports=router; 