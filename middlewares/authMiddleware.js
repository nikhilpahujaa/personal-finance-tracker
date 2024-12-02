const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  console.log(token); // Add this line to debug
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET); // Split to get the token part
    req.user = decoded;
    next();
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(401).json({ msg: 'Invalid token' });
  }
};


module.exports = authMiddleware;

