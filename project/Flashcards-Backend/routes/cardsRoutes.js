const express = require("express");
const router = express.Router();
const cardsController = require("../controllers/cardsController");

router.put("/:cardId", cardsController.updateCard);
router.delete("/:cardId", cardsController.deleteCard);
router.patch("/:cardId/favorite", cardsController.toggleFavorite);
router.get("/favorites", cardsController.getFavoriteCards);

module.exports = router;