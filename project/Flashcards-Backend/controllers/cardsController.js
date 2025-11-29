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
        console.error(err);
        res.status(500).json({error: "Server error"});
    }
};

exports.createCardInDeck = async (req, res) => {
    try{
        const { deckId } = req.params;
        const { question, answer, isFavorite } = req.body;
        if(!question || !answer) return res.status(400).json({ error: "question and answer are required"});
        
        const deck = await Deck.findById(deckId);
        if(!deck) return res.status(404).json({ error: "Deck not found"});
        const card = new Card({ deckId, question, answer, isFavorite: !!isFavorite});
        await card.save()
        res.status(201).json(card)
    } catch(err){
        console.error(err);
        res.status(500).json({ error: "Server error"});
    }
};

exports.updateCard = async(req, res) => {
    try{
        const { cardId } = req.params;
        const updates = {};
        const { question, answer } = req.body;
        if (question !== undefined) updates.question = question;
        if (answer !== undefined) updates.answer = answer;

        const card = await Card.findByIdAndUpdate(cardId, updates, {new: true});
        if(!card) return res.status(404).json({ error: "Card now found"});
        res.json(card);
    } catch(err){
        console.error(err);
        res.status(500).json({error: "Server error" });
    }
};

exports.deleteCard = async(req,res) => {
    try{
        const { cardId } = req.params;
        const card = await Card.findById(cardId);
        if (!card) return res.status(404).json({ error: "Card not found"});
        await Card.deleteOne({_id: cardId});
        res.json({message: "Card deleted"});
    } catch(err){
        console.error(err);
        res.status(500).json({ error: "Server error"});
    }
};

exports.toggleFavorite = async(req,res) => {
    try{
        const { cardId } = req.params;
        const card = await Card.findById(cardId);
        if (!card) return res.status(404).json({ error: "Card not found"});
        card.isFavorite = !card.isFavorite;
        await card.save();
        res.json(card);
    } catch(err){
        console.error(err);
        res.status(500).json({ error: "Sever error"});
    }
};

exports.getFavoriteCards = asyn(req, res) => {
    try{
        const cards = await Card.find({ isFavorite: true}).sort({createdAt: -1});
        res.json(cards);
    }
}