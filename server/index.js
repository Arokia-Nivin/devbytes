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

app.get("/api/events/:date",(req,res)=>{
    const {date}=req.params; 
    res.send(date);
})
app.get("/admin",(req,res)=>{
    res.send("I am admin");
})
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});