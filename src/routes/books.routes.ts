import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { IsBookNameValid } from "../middlewares/isBookNameValid.middleware";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post("/", IsBookNameValid.execute, booksControllers.create);
booksRouter.get("/", booksControllers.get);
booksRouter.get("/:id", IsBookIdValid.execute, booksControllers.getOne);
booksRouter.patch("/:id", IsBookNameValid.execute, IsBookIdValid.execute, booksControllers.update);
booksRouter.delete("/:id", IsBookIdValid.execute, booksControllers.delete);
