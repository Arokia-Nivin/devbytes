const express=require("express"); 
const app=express();
const mongoose=require("mongoose"); 

mongoose.connect("mongodb+srv://devbytes:devbytes@cluster0.hcx7q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"); 

app.use(express.urlencoded({extended:true})); 
app.get("/",(req,res)=>{
    res.send("<h1>devbyts</h1>");
})



const PORT=5000;
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});