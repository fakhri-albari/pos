import mongoose from "mongoose";

const { Schema } = mongoose;

const orderDetailSchema = new Schema({
  item_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "item",
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "order",
  },
});

const OrderDetail = mongoose.model("order_detail", orderDetailSchema);

export default OrderDetail;
