import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";
import { check, validationResult } from "express-validator";
import authMiddleware from '../middleware/auth.middleware.js'
import fileService from "../services/fileService.js";
import File from "../models/File.js";

const router = new Router();

router.post(
  "/registration",
  [
    check("email", "Uncorrect email").isEmail(),
    check(
      "password",
      "The password must be more than 5 characters long."
    ).isLength({ min: 5, max: 12 }),
  ],
  async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const guest = await User.findOne({ email });
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Request error", errors });
      }

      if (guest) {
        return res
          .status(400)
          .json({ message: `User with email: ${email} already exist !` });
      }

      const hashPass = await bcrypt.hash(password, 8);
      const user = new User({ email, password: hashPass });

      await user.save();

      await fileService.createDir(new File({ user: user.id, name: ''}))

      return res.json({ message: "User created." });
    } catch (e) {
      console.error(e);
      res.send({ message: "Server error" });
    }
  }
);

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body
    
    const user = await User.findOne({ email })
    if(!user) {
        res.status(404).json({ message: "User not found"})
    }

    const isPassValid = bcrypt.compareSync(password, user.password)
    if(!isPassValid) {
        res.status(400).json({ message: "Invalid password" })
    }

    const token = jwt.sign({ id: user.id }, config.get('secretKey'), { expiresIn: "1h" })

    return res.json({
        token,
        user: {
            id: user.id,
            email: user.email,
            diskSpace: user.diskSpace,
            usedSpace: user.usedSpace,
            avatar: user.avatar,
        }
    })
  } catch (e) {
    res.send({ message: "Server error" });
  }
});

router.get("/auth", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id })
    
    const token = jwt.sign({ id: user.id }, config.get('secretKey'), { expiresIn: "1h" })

    return res.json({
        token,
        user: {
            id: user.id,
            email: user.email,
            diskSpace: user.diskSpace,
            usedSpace: user.usedSpace,
            avatar: user.avatar,
        }
    })
  } catch (e) {
    res.send({ message: "Server error" });
  }
});

export default router;
