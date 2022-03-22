import { body } from "express-validator";

const inputValidation = {
  login: [body('email').isEmail(), body('password').isLength({ min: 6 })],
};

export default inputValidation;
