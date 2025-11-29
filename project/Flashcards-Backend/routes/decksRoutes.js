const express = require("express");
const router = express.Router();
const decksController = require("../controllers/decksController");
const cardsController = require("../controllers/cardsController");

router.ger("/", decksController.getAllDecks)