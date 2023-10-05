const express = require("express")
const app = express()
const db = require("./config/db")

app.use(express.json())

app.get("/test", (req, res) => {
    res.status(201).send("Conect test")
})

db.sync({ force: false }).then(() => {
    app.listen(3001, () => {
        console.log("Server On");
    })
})