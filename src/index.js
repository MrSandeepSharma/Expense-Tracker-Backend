import dotenv from "dotenv";
import { app } from "./app.js"
import connectDB from "./db/index.js"

dotenv.config({
    path: "/"
})

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("<h1>Project Setup</h1>")
})

connectDB()
    .then(()=> {
        app.listen(port, () => {
            console.log("Server is running on Port", port)
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed !!", error);
    })