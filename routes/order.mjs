import express from "express";
import Item from "../models/Item.mjs";
import Order from "../models/Order.mjs";
import OrderDetail from "../models/OrderDetail.mjs";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const { date, totalPrice, totalQuantity, user } = data.order;
    const order = new Order({
      date,
      total_price: totalPrice,
      total_quantity: totalQuantity,
      user,
    });
    await order.save();
    for (const detail of data.orderDetail) {
      const { itemId, quantity, price, total } = detail;
      const orderDetail = new OrderDetail({
        item_id: itemId,
        order_id: order.id,
        price,
        total,
        quantity,
      });
      const item = await Item.findById(itemId);
      item.stock = item.stock - quantity;
      await item.save();
      await orderDetail.save();
    }

    res.send("Order Done");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

export default router;
