import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./mongoDb/connect.js";
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js'
dotenv.config();

const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'}))
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/magimg',dalleRoutes)
app.get("/",async (req,res)=>{
    res.send('Hello from DALL-E!')
})
const startServer=async()=>{
    try{
        ConnectDB(process.env.MONGODB_URL)
        app.listen(8080,()=>console.log("Server has started on port htttp://localhost:8080"))
    }catch(error){
        console.log(error)
    }
}
startServer()