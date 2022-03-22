import jwt from "jsonwebtoken";

const secret = "fakhri39";

const createJwt = (payload, expire = 360000) => {
  return jwt.sign(payload, secret, { expiresIn: expire });
};

export { createJwt };
