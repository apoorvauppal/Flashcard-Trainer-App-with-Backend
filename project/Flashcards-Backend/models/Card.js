const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    deckId: { type: mongoose.Schema.Types.ObjectId, ref: "Deck", required: true}
})