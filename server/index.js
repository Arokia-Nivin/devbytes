const express=require("express"); 
const app=express();
const keys=require("./keys"); 

const mongoose=require("mongoose"); 
mongoose.connect(keys.MONGOURI); 


app.use(express.urlencoded({extended:true})); 
app.get("/",(req,res)=>{
    res.send("<h1>website under development</h1>");
})

//eventRoute Handlers
const eventRoutes=require("./routes/eventRoutes"); 
app.use("/api/events",  eventRoutes);

//projectRoute Handlers 
const projectRoutes=require("./routes/projectRoutes"); 
app.use("/api/projects",projectRoutes);
//adminRoute Handlers 
const adminRoutes=require("./routes/adminRoutes"); 
app.use("/api/admin", adminRoutes); 



const PORT=5000;
app.listen(PORT,()=>{
    if (process.env.ENVIRONMENT!=="production")
    {

        console.log(`listening on port http://localhost:${PORT}/`);
        // require('child_process').exec('start http://localhost:5000/');

    }
    
});

