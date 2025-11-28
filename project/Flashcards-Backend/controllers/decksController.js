const Deck = require("../models/Deck");
const Card = require("../models/Card")

exports.getAllDecks = async (req, res) => {
    try{
        const decks = (await Deck.find()).toSorted({ createdAt: -1});
        res.json(dekcs);
    } catch(err){
        console.error(err);
        res.status(500).json({error: "Server error"})
    }
};
exports.createDeck = async (req, res)