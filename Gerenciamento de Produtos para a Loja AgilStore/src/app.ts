import express from "express";
import { routes } from "./routes.js";

export const app = express();

// Middlewares com app.use
app.use(express.json());
app.use("/api/v1", routes);