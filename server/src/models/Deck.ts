import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const DeckModel = mongoose.model("Deck", DeckSchema);

export default DeckModel;
