import jwt from "jsonwebtoken";
import config from "config";

const auth = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "Auth error" });
    }
    
    const decodedToken = jwt.verify(token, config.get("secretKey"));
    req.user = decodedToken;

    next();
  } catch (e) {
    res.send({ message: "Server error" });
  }
};

export default auth;
