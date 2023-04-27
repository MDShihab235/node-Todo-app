import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleWare } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

dotenv.config({
  path: "./data/config.env",
});

//Using middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.use(errorMiddleWare);
