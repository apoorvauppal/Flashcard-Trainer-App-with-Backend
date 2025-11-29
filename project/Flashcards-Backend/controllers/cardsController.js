const Deck = require("../models/Decks");
const Card = require("../models/Card");

exports.getCardsForDeck = async(req, res) => {
    try{
        const { deckId } = req.params;
        const deck = await Deck.findById(deckId);
        if(!deck)
    }
}