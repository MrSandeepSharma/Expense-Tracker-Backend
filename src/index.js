import { app } from "./app.js"
import connectDB from "./db/index.js"

app.get("/", (req, res) => {
    res.send("<h1>Project Setup</h1>")
})

connectDB()
    .then(()=> {
        app.listen(4000, () => {
            console.log("Server is running on Port 4000!")
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed !!", error);
    })