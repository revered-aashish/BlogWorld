const express= require('express');
const app = express();
const mongoose=require('mongoose');
const path=require('path');

const authRoute =require('./routes/auth');
const userRoute= require('./routes/users');
const postRoute=require('./routes/posts');
const catRoute=require('./routes/categories');
const multer =require('multer');
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")));
mongoose.connect("mongodb://localhost:27017/BlogDB",
{
    useNewUrlParser:true,
   
    
}).then(console.log("connected")).catch((err) => console.log(err));

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    }, filename:(req,file,cb)=>{
        cb(null,req.body.name)
    }
})

const upload=multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded");
})
app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/posts',postRoute);
app.use('/api/categories',catRoute);
app.listen("3001",()=>{
    console.log("backend is running at 3001");
})