import { body } from "express-validator";

const inputValidation = {
  login: [
    body("email", "Invalid email").isEmail(),
    body("password", "Invalid password").isLength({ min: 6 }),
  ],
};

export default inputValidation;
