const jwt = require("jsonwebtoken");
const secret = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret.jwtSecrets, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "There was a problem" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ you: "shall not pass!" });
  }
};