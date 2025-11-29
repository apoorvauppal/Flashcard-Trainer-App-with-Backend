const Deck = require("../models/Decks");
const Card = require("../models/Card");

exports.getCardsForDeck = async(req, res) => {
    try{
        const { deckId } = req.params;
        const deck = await Deck.findById(deckId);
        if(!deck) return res.status(404).json({ error: "Deck not found" });
        const cards = (await Card.find({ deckId })).toSorted({ createdAt: -1});
        res.json(cards);
    } catch (err){
        console.error(err)
    }
}