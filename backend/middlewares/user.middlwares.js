import JWT from "jsonwebtoken";
import userModels from "../models/user.models.js";

export const verifyUser = (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    const user = userModels.findById(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default verifyUser;
