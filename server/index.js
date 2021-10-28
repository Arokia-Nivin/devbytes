const express=require("express"); 
const app=express();
const keys=require("./keys"); 

const mongoose=require("mongoose"); 
mongoose.connect(keys.MONGOURI); 
const Event=require("./models/events"); 

app.use(express.urlencoded({extended:true})); 
app.get("/",(req,res)=>{
    res.send("<h1>devbyts</h1>");
})

app.get("/api/events/dates", async(req,res)=>{
    try{
        const events= await Event.find({}, {"eventdate":1});
        res.send(events); //dates will be sent 
    }
    catch(err) {
        res.status(500).send(err);
    }
})


app.get("/api/events/:date", async (req,res)=>{
    const date= new Date(req.params.date);
    const isValidDate= (date !== "Invalid Date" && !isNaN(date));
    if (isValidDate)
    {
        try{
            const events = await  Event.find({eventdate:date});
            res.send({events});
        }
        catch(err)
        {
            res.status(500).send(err);
        }

    }
    else 
    {
        //incorrect request body 
        res.status(400).send("Invalid Date");
    }
    
  

}) 

app.get("/admin",(req,res)=>{
    res.send("I am admin");
})
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});

