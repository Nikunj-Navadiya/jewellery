import express from "express";
import {
  signup,
  login,
   sendOtp, resetPassword
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/send-otp", sendOtp);
router.post("/reset-password", resetPassword);


export default router;
