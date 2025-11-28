const mongoose = require("mongoose");

const DeckSchema = new mongoose.Schema({
    title: { type: String, required: true}
})