import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/todo.router.js";

dotenv.config();
connectDB();

const app = express();

// =========== Middleware ==============
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// =========== Routes ================
app.use("/api/todos", todoRoutes);

// ========== Start Server ===========
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
