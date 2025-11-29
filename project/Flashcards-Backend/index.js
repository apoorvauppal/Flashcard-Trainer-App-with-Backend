require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const decksRoutes = require("./routes/decksRoutes");
const cardsRoutes = require("./routes/cardsRoutes");

const app = express();
app.use(cors());
app.use(express.json());

