import { app } from "./app.js"

app.get("/", (req, res) => {
    res.send("<h1>Project Setup</h1>")
})

app.listen(4000, () => {
    console.log("Server is running on Port 4000!")
})