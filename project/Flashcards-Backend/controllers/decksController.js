const Deck = require("../models/Deck");
const Card = require("../models/Card")

exports.getAllDecks = async (req, res) => {
    try{
        const decks = await Deck.find().sort({ createdAt: -1});
        res.json(decks);
    } catch(err){
        console.error(err);
        res.status(500).json({error: "Server error"})
    }
};
exports.createDeck = async (req, res) => {
    try{
        const { title } = req.body;
        if(!title) return res.status(400).json({error: "title is required"});
        const deck = new Deck({ title });
        await deck.save();
        res.status(201).json(deck);
    } catch(err){
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

exports.getDeckById = async (req, res) => {
    try{
        const { deckId } = req.params;
        const deck = await Deck.findById(deckId);
        if(!deck) return res.status(404).json({ error: "Deck not found" });
        res.json(deck);
    } catch(err){
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};

exports.deleteDeck = async (req, res) => {
    try{
        const { deckId } = req.params;
        const deck = await Deck.findById(deckId);
        if(!deck) return res.status(404).json({ error: "Deck not found"});

        await Deck.deleteOne({ _id: deckId });

        await Card.deleteMany({ deckId: deckId });

        res.json({ message: "Deck and its cards deleted" });
    } catch(err){
        console.error(err);
        res.status(500).json({error: "Server error"});
    }
};