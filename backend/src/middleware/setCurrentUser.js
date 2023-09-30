// Require in logic from your authentication controller
const getUserFromToken = require("../getUserFromToken");

module.exports = function setCurrentUser(req, res, next) {
  const token = req.header("authorization");

  // look up the user based on the token
  const user = getUserFromToken(token).then(user => {
    // append the user object the the request object
    req.user = user;

    // call next middleware in the stack
    next();
  });
};