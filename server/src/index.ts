import process from "process";
import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import router from "./routers";
import errorMiddleware from "./middlewares/error.middlewares";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json({ limit: "500kb" }));
app.use(express.urlencoded({ limit: "500kb", extended: true }));

// Error handling middleware
app.use(errorMiddleware);

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Đã kết nối Database thành công"))
  .catch((err) => console.error("Lỗi kết nối Database:", err));

// Routes
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
