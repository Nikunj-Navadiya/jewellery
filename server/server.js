import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";


dotenv.config();
connectDB(); 

const app = express(); // ✅ FIRST create app

// ✅ CORS CONFIG (ONLY ONCE)
app.use(
  cors({
    origin: [
      "https://jewellery-u57q.vercel.app",
      "http://localhost:5173"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ middleware
app.use(express.json());
app.use(cookieParser());

// ✅ routes
app.use("/api/auth", authRoutes);

app.use("/api", contactRoutes);


app.get("/", (req, res) => {
  res.send("✅ JWT Auth API is Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
