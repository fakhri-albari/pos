import express from "express";
import db from "./db.mjs";
import loginRoute from "./routes/login.mjs";
import cors from "cors";

const app = express();

const PORT = 5000;

db();

app.use(cors());

app.use(express.json());

app.use("/login", loginRoute);

app.listen(PORT);
