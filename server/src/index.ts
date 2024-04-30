import express, { Request, Response } from "express";
import mongoose from "mongoose";

import Deck from "./models/Deck";

const app = express();

const db = mongoose.connect(
  "mongodb+srv://flashcardsage:<DNEz7iUBg3TFXDBX>@cluster0.wldemyp.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(5001);
