require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const decksRoutes = require("./routes/decksRoutes");
const cardsRoutes = require("./routes/cardsRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/flashcards";
mongoose.connect(MONGO_URI,)