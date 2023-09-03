import mongoose from "mongoose";


const connectDB = async () =>
{
    try
    {
        
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Server connected to Database ${conn.connection.host}`)
    }
    catch(err) {
        console.log(`Error in Mongodb ${err}`)
    }
};

export default connectDB


