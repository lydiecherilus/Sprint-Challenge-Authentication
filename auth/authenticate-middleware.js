/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require("jsonwebtoken");
const { secret } = require("../config/secrets");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    jwt.verify(authorization, secret, (error, decodedToken) => {
      console.log(req.headers)
      if (error) {
        res.status(401).json({ message: "Invalid Token" })
      } else {
        req.decodedToken = decodedToken
        next();
      }
    })
  } else {
    res.status(401).json({ you: 'shall not pass! - Token required' });
  }
};