import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import dotenv from "dotenv";
import chalk from 'chalk';
import morgan from "morgan";
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from "cors";
import path from "path"
import { fileURLToPath } from "url";



const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// config .env
dotenv.config();
connectDB();





// rest object
const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname,'./client/build')))





// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes)




// rest api
app.get('*', function (req, res)
{
  res.sendFile(path.join(__dirname, './client/build/index.html'));
})





// mention port
const PORT = process.env.PORT || 8080


// app listen
app.listen(PORT, () =>
{
    console.log(`Server started at ${chalk.green(PORT)}`)
});
app.on("listening", function () {
  console.log(
    "Express server started on port %s at %s",
    server.address().port,
    server.address().address
  );
});