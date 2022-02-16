import express, { Request, Response } from "express";
import path from "path";

import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import { router } from "./routes";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(router);

app.listen(port);
console.log(`server running in http://localhost:${port}`);
