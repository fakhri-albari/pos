import jwt from "jsonwebtoken";

const secret = "fakhri39";

const createJwt = (payload, expire = 360000) => {
  return jwt.sign(payload, secret, { expiresIn: expire });
};

const checkJwt = (token) => {
  const result = jwt.verify(token, secret, (error) => {
    return error ? error.message : false;
  });
};

const decodeJwt = (token) => {
  return jwt.decode(token);
};

export { createJwt, checkJwt, decodeJwt };
