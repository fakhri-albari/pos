import mongoose from "mongoose";

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  img: {
    type: String,
    default: "img_default.png",
  },
});

const Item = mongoose.model("item", itemSchema);

export default Item;
