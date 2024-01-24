const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const PlayerModel = require("./models/player")
const DB_KEY = process.env.DB_KEY
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
mongoose.connect(`mongodb+srv://vaibhavhome88:2uLwd2YIgT7GH5fO@cluster0.b0qhzd2.mongodb.net/players?retryWrites=true&w=majority`)

app.get("/allPlayers", (req,res) =>{
    PlayerModel.find()
    .then((response) =>{
        res.json(response)
    })
    .catch((err) =>{
        res.json(err)
    })
})

app.post("/createPlayer", async (req,res) =>{
    let player = new PlayerModel({
        userName: req.body.userName,
        completionTime: req.body.completionTime,
        score: req.body.score
    })
    await player.save()
    .then(() => {
        res.json({
            message: "Player Added"
        })

    })
    .catch((err) => {
        res.json({
            message: "Error"
        })
    })
})




const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log(`Server started on port ${PORT}`)
})

