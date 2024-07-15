import express, { json } from "express";
import { booksRouter } from "./routes/books.routes";
import { HandleErrors } from "./errors/handleErrors.middleware";
import helmet from "helmet";
import "express-async-errors";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/books", booksRouter);

app.use(HandleErrors.execute);
