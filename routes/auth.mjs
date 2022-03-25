import express from "express";
import User from "../models/User.mjs";
import { checkJwt, decodeJwt } from "../jwt.mjs";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { token } = req.body;
    const result = checkJwt(token);
    if (result) {
      res.json({ error: result });
    } else {
      const data = decodeJwt(token);
      const user = await User.findById(data.user.id).select("-password -_id");
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
