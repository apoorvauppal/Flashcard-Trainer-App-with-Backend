const express = require("express");
const router = express.Router();
const cardsController = require("../controllers/cardsController");

router.put("/:cardId", cardsController)