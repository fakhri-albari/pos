import express from "express";
import Item from "../models/Item.mjs";
import { checkJwt, decodeJwt } from "../jwt.mjs";
import validation from "../inputValidation.mjs";
import { check, validationResult } from "express-validator";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const item = await Item.find();
    res.json(item);
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
