import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  CardNumber: {
    type: Number,
    required: true,
  },
  ExpDate: {
    type: String,
    required: true,
  },
  Cvv: {
    type: Number,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
});

const Card = mongoose.models.Card || mongoose.model("Card", CardSchema);

export default Card;
