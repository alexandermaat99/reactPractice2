import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import mongoose from "mongoose";

import Deck from "./models/Deck";

const PORT = 5001;
const mongoURL = process.env.MONGO_URL!;
const app = express();

//express middleware to parse json
app.use(express.json());

// Create a new deck - restfull architecture
app.post("/decks", async (req: Request, res: Response) => {
  console.log(req.body);

  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

mongoose.connect(mongoURL).then(() => {
  console.log(`Connected to MongoDB on port ${PORT}`);
  app.listen(PORT);
});
