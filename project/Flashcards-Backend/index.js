require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const decksRoutes = require("./routes/decksRoutes");
const cardsRoutes = require("./routes/cardsRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/flashcards";
mongoose.connect("mongodb+srv://auppal_db_user:<yeUdDGhh6kUIi9on>@cluster0.nsmde7a.mongodb.net/flashcardsDB?appName=Cluster0")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Mongo connection error:", err));

app.use("/api/decks", decksRoutes);
app.use("/api/cards", cardsRoutes);

app.get("/api/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});