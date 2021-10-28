const express=require("express"); 
const app=express();


const mongoose=require("mongoose"); 
mongoose.connect("mongodb+srv://devbytes:devbytes@cluster0.hcx7q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"); 
const Event=require("./models/events"); 

app.use(express.urlencoded({extended:true})); 
app.get("/",(req,res)=>{
    res.send("<h1>devbyts</h1>");
})

app.get("/api/events/dates",(req,res)=>{
    res.send("dates will be sent ");  
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
        res.status(400).send("not a valid date");
    }
    
  

}) 

app.get("/admin",(req,res)=>{
    res.send("I am admin");
})
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});

