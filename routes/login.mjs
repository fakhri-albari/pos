import express from "express";
import User from "../models/User.mjs";
import bcryptjs from "bcryptjs";
import { createJwt } from "../jwt.mjs";
import validation from "../inputValidation.mjs";
import { validationResult } from "express-validator";

const router = express.Router();

router.post("/", validation.login, async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.json({ msg: "Wrong email or password" });
    }

    const passwordMatch = await bcryptjs.compare(password, user.password);

    const payload = {
      user: {
        id: user.id,
      },
    };

    if (passwordMatch) {
      const token = createJwt(payload);
      res.json({ token });
    }
    res.json({ msg: "Wrong email or password" });
  } catch (error) {
    res.status(500);
  }
});

export default router;
