import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { IsBookNameValid } from "../middlewares/isBookNameValid.middleware";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";
import { createBookSchema, editBookSchema } from "../schemas/books.schema";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post("/", ValidateRequest.execute({ body: createBookSchema }), IsBookNameValid.execute, booksControllers.create);
booksRouter.get("/", booksControllers.get);
booksRouter.get("/:id", IsBookIdValid.execute, booksControllers.getOne);
booksRouter.patch("/:id", IsBookIdValid.execute, ValidateRequest.execute({ body: editBookSchema }), IsBookNameValid.execute, booksControllers.update);
booksRouter.delete("/:id", IsBookIdValid.execute, booksControllers.delete);
