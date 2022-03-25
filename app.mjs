import express from "express";
import db from "./db.mjs";
import loginRoute from "./routes/login.mjs";
import authRoute from "./routes/auth.mjs";
import itemRoute from "./routes/item.mjs";
import orderRoute from "./routes/order.mjs";
import cors from "cors";

const app = express();

const PORT = 5000;

db();

app.use(cors());

app.use(express.json());

app.use("/login", loginRoute);
app.use("/auth", authRoute);
app.use("/item", itemRoute);
app.use("/order", orderRoute);

app.listen(PORT);
