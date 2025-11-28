const Deck = require("../models/Deck");
const Card = require("../models/Card")

exports.getAllDecks = async (req, res) => {
    try{
        const decks = (await Deck.find()).toSorted({ createdAt: -1})
    }
}