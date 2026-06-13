import express from "express";
import authRouter from "./routes/auth.route.js";
import categoryRouter from "./routes/category.route.js";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/category",categoryRouter)

export default app;