const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      user,
      "token123",
      {
        expiresIn: 60 * 60,
      },
      (err, token) => {
        if(err) {
            return reject(err)
        }
        resolve(token)
      }
    );
  });
};

module.exports = createToken
