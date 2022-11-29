const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    numberOfPlayers: { type: Number, required: true },
    coach: { type: String },
    state: { type: String, required: true }
},
    {
        timestamps: true
    })
module.exports = mongoose.model("teams", TeamSchema)