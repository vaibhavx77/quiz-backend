const mongoose = require("mongoose")
const playerSchema =  mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    completionTime: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
}, {timestamps: true})


const PlayerModel = mongoose.model("players", playerSchema)
module.exports = PlayerModel