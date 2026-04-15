import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
async function  connectDB() {
    try{
         await mongoose.connect(process.env.MONGO_URL)
         console.log("db connect");
         
    }
    catch(err){
      console.log(err);
      
    }
    
}
export default connectDB