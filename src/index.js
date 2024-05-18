import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Project Setup</h1>")
})

app.listen(4000, () => {
    console.log("Server is running on Port 4000!")
})