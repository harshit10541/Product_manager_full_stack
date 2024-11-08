import express, { json } from "express";
import dotenv from "dotenv"; //to see the content from env files else it will appear as 'undefined'
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
app.use(express.json()); //allows us to accept json data in the req.body middleware: runs before we send the req back to the client  

app.use("/api/products", productRoutes)

app.get("/", (req, res) => {
    res.send("Server is ready");
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    console.log("check listening at http://localhost:5000 ");
});

//hJlQXOnld3dp86mn