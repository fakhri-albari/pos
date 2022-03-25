import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  date: {
    type: Date, 
    default: Date.now,
  },
  total_price: {
    type: Number,
    required: true,
  },
  total_quantity: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }
});

const Order = mongoose.model("order", orderSchema);

export default Order;
